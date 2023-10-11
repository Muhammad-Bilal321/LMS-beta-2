import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const CourseList = () => {
  // Fetch the list of courses from your data source
    const courses = [
      
  ];

  return (
    <div>
      <h2>Course List</h2>
      <List>
        {courses.map((course, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={course.name}
              secondary={`Duration: ${course.duration}, Fees: ${course.fees}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CourseList;
