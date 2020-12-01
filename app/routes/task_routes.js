// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Task = require('../models/task')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// index route
router.get('/tasks', requireToken, (req, res, next) => {
	Task.find({ owner: req.user.id })
		.populate('sprint')
		.then(tasks => {
			return tasks.map(task => task.toObject())

		})
		.then(tasks => res.status(200).json({ tasks }))
		.catch(next)
})

// show route
router.get('/tasks/:id', requireToken, (req, res, next) => {
	Task.findById(req.params.id)
		.populate('sprint')
		.then(handle404)
		.then(task => res.status(200).json({ task: task.toObject() }))
		.catch(next)
})

// create route
router.post('/tasks', requireToken, (req, res, next) => {
	req.body.task.owner = req.user.id
	Task.create(req.body.task)
		.then(task => res.status(201).json({ task }))
		.catch(next)
})
// update route
router.patch('/tasks/:id', requireToken, (req, res, next) => {
	delete req.body.task.owner
	Task.findById(req.params.id)
		.then(handle404)
		.then(task => {
			requireOwnership(req, task)
			return task.updateOne(req.body.task)
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

// destroy route
router.delete('/tasks/:id', requireToken, (req, res, next) => {
	Task.findById(req.params.id)
		.then(handle404)
		.then(task => {
			requireOwnership(req, task)
			task.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

module.exports = router
