import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  console.log("Inside Cards Component : printing data");
  console.log(courses);

  const [likedCourses, setLikedCourses] = useState([]);

  let category = props.category;

  // It returns all the courses from the courses object
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      console.log(allCourses);
      return allCourses;
    } else {
      return courses[category]; // As courses prop is an object we are calling the property of that object using its key which is category
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
