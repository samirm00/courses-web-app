"use strict";

import { handleRefreshCourses } from "../handlers/handleRefreshCourses.js";

//listener
document
  .getElementById("refresh-course")
  .addEventListener("click", handleRefreshCourses);
