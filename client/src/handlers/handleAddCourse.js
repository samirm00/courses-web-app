"use strict";
import { crud } from "../functions/crud.js";
import { display } from "../functions/display.js";

export const handleAddCourse = async (target) => {
  const courseName = target.currentTarget.form.name.value;
  const newCourse = {
    name: courseName,
  };

  const courseData = await crud.postCourse(newCourse);
  const render = await display.renderCourse(courseData);
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.appendChild(render);
};
