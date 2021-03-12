"use strict";
import { crud } from "./crud.js";

export const display = {
  renderCourse: async (course) => {
    // create a parent div

    const divEl = document.createElement("div");
    divEl.classList.add("div-parent");

    const liEl = document.createElement("li");
    liEl.innerText = `${course.id} - ${course.name}`;
    liEl.classList.add("course-li");

    // edit button

    const editButton = document.createElement("button");
    editButton.id = course.id;
    editButton.innerHTML = '<i class="fas fa-pen-square"></i>';
    editButton.classList.add("edit-btn");

    editButton.addEventListener("click", async () => {
      try {
        const id = editButton.id;
        const newName = prompt("Please Enter the new course name");
        const course = {
          name: newName,
        };

        const data = await crud.updateCourse(id, course);
      } catch (err) {
        console.error(err);
      }
    });

    // delete button

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add("delete-btn");
    deleteButton.id = course.id;

    deleteButton.addEventListener("click", async () => {
      try {
        const res = await crud.deleteCourse(deleteButton.id);
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    });

    //append to the parent div
    divEl.appendChild(liEl);
    divEl.appendChild(editButton);
    divEl.appendChild(deleteButton);

    return divEl;
  },

  renderAllCourses: async (courses) => {
    // divContainer

    const divContainer = document.createElement("div");
    divContainer.classList.add("div-courses");

    // create unordered list for courses

    const ulLi = document.createElement("ul");
    ulLi.classList.add("ul-ul");
    courses.map((course) => {
      const liEl = document.createElement("li");
      liEl.id = course.id;
      liEl.innerText = `${course.id} - ${course.name}`;

      ulLi.appendChild(liEl);
    });

    // append ulLi to the divContainer

    divContainer.appendChild(ulLi);

    return divContainer;
  },
};
