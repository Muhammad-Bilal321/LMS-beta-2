import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const CourseForm = () => {
  const [course, setCourse] = useState({
    name: "",
    duration: "",
    fee: "",
    teacher: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(course);
  };

  return (
    <div>
      <h2>Course Form</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Course Name"
          variant="outlined"
          fullWidth
          name="name"
          value={course.name}
          onChange={handleChange}
        />
        <TextField
          label="Duration"
          variant="outlined"
          fullWidth
          name="duration"
          value={course.duration}
          onChange={handleChange}
        />
        <TextField
          label="Fee"
          variant="outlined"
          fullWidth
          name="fee"
          value={course.fee}
          onChange={handleChange}
        />
        <TextField
          label="Teacher"
          variant="outlined"
          fullWidth
          name="teacher"
          value={course.teacher}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CourseForm;
