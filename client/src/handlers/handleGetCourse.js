"use strict";
import { crud } from "../functions/crud.js";
import { display } from "../functions/display.js";

export const handleGetCourse = async (target) => {
  const id = Number(target.currentTarget.form.id.value);
  console.log(id);

  const courseData = await crud.getCourse(id);
  const render = await display.renderCourse(courseData);
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.appendChild(render);
};
