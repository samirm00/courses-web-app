"use strict";
import { handleAddCourse } from "../handlers/handleAddCourse.js";

//listener
document
  .getElementById("add-course")
  .addEventListener("click", handleAddCourse);
