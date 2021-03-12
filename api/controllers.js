"use strict";

const fs = require("fs");
const path = require("path");
const Joi = require("joi");

const config = require("../config");
const DATA_DIR = path.join(__dirname, "..", "data", "courses.json");

const controllers = {
  hello: (req, res) => {
    res.json({ api: "courses!" });
  },

  getAllCourses: (req, res) => {
    fs.readFile(DATA_DIR, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      }
      const parsedCourse = JSON.parse(data);
      res.status(200).send(parsedCourse);
    });
  },

  getCourse: (req, res) => {
    fs.readFile(DATA_DIR, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      }
      const parsedCourse = JSON.parse(data);
      const course = parsedCourse.courses.find(
        (course) => course.id === parseInt(req.params.id)
      );
      if (!course) {
        res
          .status(404)
          .send(`the course with the id: ${req.params.id} dose not existed`);
        return;
      }
      res.send(course);
    });
  },

  addCourse: (req, res) => {
    const schema = Joi.object({
      name: Joi.string().min(5).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    fs.readFile(DATA_DIR, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      }

      const parsedData = JSON.parse(data);
      const courses = parsedData.courses;

      const newCourse = {
        id: courses.length + 1,
        name: req.body.name,
      };
      parsedData.courses.push(newCourse);
      res.send(newCourse);

      const stringifyCourses = JSON.stringify(parsedData, null, 2);

      fs.writeFile(DATA_DIR, stringifyCourses, (err) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        console.log("the new course has been added successfully! ");
      });
    });
  },

  updateCourse: (req, res) => {
    const schema = Joi.object({
      name: Joi.string().min(5).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    fs.readFile(DATA_DIR, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      }
      const parsedData = JSON.parse(data);
      const courses = parsedData.courses;

      const course = courses.find(
        (element) => element.id === parseInt(req.params.id)
      );

      if (!course) {
        res
          .status(404)
          .send(`the course with the id ${req.params.id}  dose not existed`);
        return;
      }

      course.name = req.body.name;
      res.send(course);
      const stringifyCourses = JSON.stringify(parsedData, null, 2);

      fs.writeFile(DATA_DIR, stringifyCourses, (err) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        console.log(
          `the course with id : ${req.params.id} has been updated successfully `
        );
      });
    });
  },

  deleteCourse: (req, res) => {
    fs.readFile(DATA_DIR, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      }

      const parsedData = JSON.parse(data);
      const courses = parsedData.courses;

      const course = courses.find(
        (element) => element.id === parseInt(req.params.id)
      );

      if (!course) {
        res
          .status(404)
          .send(`the course with the id ${req.params.id} dose not existed`);
        return;
      }

      const courseIndex = courses.indexOf(course);
      courses.splice(courseIndex, 1);
      res.send(course);

      const stringifyCourses = JSON.stringify(parsedData, null, 2);

      fs.writeFile(DATA_DIR, stringifyCourses, (err) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        console.log(" the course has been deleted successfully");
      });
    });
  },
};

module.exports = controllers;
