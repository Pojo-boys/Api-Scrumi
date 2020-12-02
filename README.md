# Backend Scrumi

## Planning story

Development of Scrumi started off as a baseline idea for a bucket list app. After much deliberation, we all decided that taking the route of something relevant to what we were studying and also useful for ourselves. We decided that Scrumi should be an application that would allow teams to follow the scrum process to achieve an agile methodology.
During the development and planning process we used techniques such as paired programing and mob programing to ensure consistency throughout the project and participation of every member. Mob programming is where we spent the majority of our time, making sure there were a few typos as possible. Whenever an issue arised we would gather our thoughts to come up with the most effective solution.

## Description

Scrumi is an application to help developers with their scrum tasks. Create a task, add that task to a sprint, and track your progress as you complete sections of your current project. This repository contains the backend code which created the express api and the structure for our database.

## Important Links

- ![Deployed Api](https://secure-retreat-81068.herokuapp.com/)
- ![Deployed Client](https://pojo-boys.github.io/Scrumi/#/)
- ![Client Repo](https://github.com/Pojo-boys/Scrumi)

## Technologies Used

- Express
- JavaScript
- Mongoose
- MongoDB
- Git
- GitHub
- Node

## Unsolved Problems

In future versions of this application we would like to build out the ability to assign different users to share tasks on a sprint and assign sub-tasks for each member of the scrum team to complete.

## Entity Relationship Diagram

### MVP
![ScrumiMVP](https://media.git.generalassemb.ly/user/31388/files/2eff8280-2efe-11eb-955c-3a520841948c)

### Reach Goals
![ScrumiReachGoals](https://media.git.generalassemb.ly/user/31388/files/33c43680-2efe-11eb-8fba-c341751b6c7e)

### Catalog of routes

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |
| GET    | `/tasks`            | `tasks#index`     |
| GET    | `/tasks/:id`        | `tasks#show`      |
| POST   | `/tasks`            | `tasks#create`    |
| PATCH  | `/tasks/:id`        |  `tasks#update`   |
| DELETE | `/tasks/:id`        | `tasks#delete`    |
| GET    | `/sprints`          |  `sprints#index`  |
| GET    | `/sprints/:id`      | `sprints#show`    |
| POST   |  `/sprints`         | `sprints#create`  |
| PATCH  | `/sprints/:id`      | `sprints#update`  |
| DELETE | `/sprints/:id`      |  `sprints#delete` |
