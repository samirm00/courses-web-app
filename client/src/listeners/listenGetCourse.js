"use strict";

import { handleGetCourse } from "../handlers/handleGetCourse.js";

//listener
document
  .getElementById("get-course")
  .addEventListener("click", handleGetCourse);
