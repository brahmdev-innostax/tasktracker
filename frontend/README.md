# Task Tracker

This project is a frontend application for a TODO app that provides all the necessary features for creating, reading, and updating todos. Additionally, it allows users to upload files to enhance their task management experience. The frontend has been made mobile responsive to allow accessible acces on mobile devices.

## Features

- Create, read, and update todos: Users can easily create new tasks, view existing tasks, and update task details as needed.
- Fully-responsive frontend design: Users can access the Todo App on desktop as well as mobile devices.

## Installation

Clone the ```tasktracker``` github repo using the command:
```git clone https://www.github.com/brahmdev-innostax/tasktracker.git```

Now run the project using the following commands in sequence: 
```bash
  cd tasktracker/frontend
  npm install
  npm start
```

## Technologies

ReactJS - for creating the frontend,
Axios - for calling backend APIs and access the various end points, 
Tailwind CSS - for styling the UI with easy responsiveness

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
REACT_APP_BACKEND_URL=
```

## API Reference

#### List all Todos

```<hosted_url>/
```

#### Show Single Todo
Click on any of the Todo shown in the list, or open the following link:
```<hosted_url>/<todoId>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create Single Todo

- Click on the Add Todo button (Green colored button at the bottom of the Todo list).
- Fill the Title, Subtitle, Content fields of the Todo.
- Click on the Submit button to add the Todo.

#### Update Single Todo

- Click on the Edit Todo button (pen icon) on the Todo to edit on th list.
- Change the Title, Subtitle, Content fields of the Todo.
- Click on the Submit button to add the Todo.

#### Delete Single Todo
- Click on the Trash icon on a Todo in the list to delete the Todo.
## Authors

[@brahmdev-innostax](https://www.github.com/brahmdev-innostax)
