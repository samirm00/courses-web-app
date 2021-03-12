# Courses-Web-App

> A simple full-stack App , allows the user to get all course , get a course bty id , delete or update a course and add anew course.

---

## Data

> describe the data used in your project.
>
> - what properties?
> - what types?
> - what are array entries like?
>   Data are an objects contains courses array , which contains one object for each course

---

<!--
## User Story Dependencies

![Story Dependency Diagram](img/userStories.png)

---

## WIREFRAME

![wireframe]()
-->

---

## 0.Setup

- fork the starter repo `courses-we-app`
- turn on GitHub pages
- add collaborators
- add the first strategy plan
- add a simple README.md
- add milestone and labels

---

## 1. create a server using express

**As a developer , I want to create a server to allows the user to get,post,delete,update courses**

### REPO

- This user story is developed on branch `1-server`.
- This branch is merged to `master` branch after completion.

### Task A

`index.js`

- this issue developed on a branch `1-server`
- require the necessary packages
- use `express` to statically serve the `client` folder
- add err handling `middleware`
- start the server

---

## 2. create controllers

**As a developer , I want to create controllers, to handle the users requests**

### REPO

- This user story is developed on branch `2-controllers`.
- This branch is merged to `master` branch after completion.

### Task A

`controllers.js`

- this issue developed on a branch `2-controllers`
- create a `getAllCourses` , which read from the `courses.json` and send the parsed courses to the user
- create a `getCourse` , which read from the `courses.json` and send the parsed course to the user
- create a `addCourse` , which read and write to the `courses.json` and send the new course to the user
- create a `updateCourse` , which read and write to the `courses.json` and send the updated course to the user
- create a `deleteCourse` , which read and write to the `courses.json` and send the deleted course to the user
- export `controllers`

---

## 3. create routes

**As a developer , I want to create routes, to be able to accommodate to the the users requests**

### REPO

- This user story is developed on branch `3-routes`.
- This branch is merged to `master` branch after completion.

### Task A

`routes.js`

- this issue devolved on a branch `3-routes`
- require `controllers` and express
- write 5 routes for `get all courses`, `get a course`, add a course`, update a course`and `delete a course`,
- export the `router`

---

## 4. create the client structures html

**As a user , i want to use the course App**

### REPO

- This user story is developed on branch `4-html`.
- This branch is merged to `master` branch after completion.

- this issue developed on a branch `4-html`

### Task A

`index.html`

- create `index.htm` file
- add header and form
- add inputs `type=text` for the course name ,`type=number` for the course id and 4`buttons` to add ,get a course , get all course and refresh courses
- add a link to about page

### Task B

`about.html`

- create `about.html` with information about how to use the `Courses App`

---

## 5. create different functions to handle the user send requests

**As a user , i want to able to do CRUD on the courses App**

### REPO

- This user story is developed on branch `5-functions`.
- This branch is merged to `master` branch after completion.

- this issue developed on a branch `5-functions`

### Task A

`crud.js`

- create an object `crud` , to include all the function
- create `getAllCourses` function to get all the course for the server
- create `getCourse` function to get a course by id for the server
- create `postCourse` function to post a new course
- create `updateCourse` function to update a course
- create `deleteCourse` function to delete a course by id

### Task B

`display.js`

- create an object `display` , to include all the function to render a course and render all courses
- create `renderCourse` function to render a course
- create `renderAllCourses` function to render all the courses

---

## 6. create different handlers to handle the requests

**As a user , i want to able to do CRUD on the courses App**

### REPO

- This user story is developed on branch `6-handlers`.
- This branch is merged to `master` branch after completion.

- this issue developed on a branch `6-handlers`

### Tasks

- add handler to get all courses
- add handlers to get on course
- add handler to add a course
- add handler to refresh the course

---

## 7. create different listeners

**As a user , i want to able to do CRUD on the courses App**

### REPO

- This user story is developed on branch `7-listeners`.
- This branch is merged to `master` branch after completion.

- this issue developed on a branch `7-listeners`

### Tasks

- this issue developed on a branch `7-listeners`
- add listener to get all course
- add listener to get a course
- add listener to add a course
- add listener to refresh all course

---

## 8. style

### REPO

- This user story is developed on branch `8-style`.
- This branch is merged to `master` branch after completion.

### Tasks A

- this issue developed on a branch `8-style`
- add general styles `body`
- style `h1`
- style the form and the `inputs`
- style `DOM` elements

---
