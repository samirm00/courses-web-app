"use strict";

import { handleGetAllCourses } from "../handlers/handleGetAll.js";

//listener
document
  .getElementById("get-courses")
  .addEventListener("click", handleGetAllCourses);
