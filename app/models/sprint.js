const mongoose = require('mongoose')

const sprintSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	timeframe: {
		type: Number,
		required: true
	},
	objectives: {
		type: Array,
		required: true
	},
	task: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Task',
		required: true
	}
}, {
	timestamps: true
})

module.exports = mongoose.model('Sprint', sprintSchema)