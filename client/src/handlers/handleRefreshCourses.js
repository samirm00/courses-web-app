"use strict";
import { crud } from "../functions/crud.js";
import { display } from "../functions/display.js";

export const handleRefreshCourses = async () => {
  const allCourses = await crud.getAllCourses();
  const render = await display.renderAllCourses(allCourses);
  const root = document.getElementById("root");
  root.innerHTML = "";
  root.appendChild(render);
};
