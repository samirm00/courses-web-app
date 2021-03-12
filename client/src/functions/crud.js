export const crud = {
  getAllCourses: async () => {
    try {
      const res = await fetch("http://localhost:8080/api/courses");
      const data = await res.json();
      console.log(data.courses);
      return data.courses;
    } catch (err) {
      console.error(err);
    }
  },

  getCourse: async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/courses/${id}`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  },

  postCourse: async (course) => {
    try {
      const res = await fetch("http://localhost:8080/api/courses", {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
          "content-type": "application/json; charset= UTF-8",
        },
      });

      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  },

  updateCourse: async (id, change) => {
    try {
      const res = await fetch(`http://localhost:8080/api/courses/${id}`, {
        method: "PUT",
        body: JSON.stringify(change),
        headers: { "content-type": "application/json; charset = UTF-8" },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  },

  deleteCourse: async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/courses/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  },
};
