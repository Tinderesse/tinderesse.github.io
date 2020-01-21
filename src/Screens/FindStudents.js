import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import StudentCard from "../Components/StudentCard";
import StudentBrief from "../Components/StudentBrief";
import "./FindStudents.css";
import MockList from "../mock.json";

const FindStudents = props => {
  const [index, setIndex] = useState(0);
  const [student, setStudent] = useState();
  const [keys, setKeys] = useState();
  const [StudentList, setStudentList] = useState();

  const initStudentList = async () => {
    const userKeys = Object.keys(MockList);
    setKeys(userKeys);
    setStudentList(MockList);
    setStudent(userKeys[0]);
  };

  useEffect(() => {
    initStudentList();
  }, []);

  const nextStudent = () => {
    const newIndex = index + 1;
    setIndex(newIndex);
    setStudent(keys[newIndex]);
  };

  const handleLike = () => {
    const matchList = JSON.parse(localStorage.getItem("matchList")) || {};
    matchList[student] = {
      name: StudentList[student].name,
      whatsapp: StudentList[student].whatsapp,
      image: StudentList[student].image
    };
    localStorage.setItem("matchList", JSON.stringify(matchList));
    nextStudent();
  };

  return (
    <div className="Find-container">
      <Typography>Encontre estudantes</Typography>
      {StudentList && StudentList[student] && (
        <StudentCard
          image={StudentList[student].image}
          handleReject={nextStudent}
          handleLike={handleLike}
        >
          <StudentBrief
            name={StudentList[student].name}
            bio={StudentList[student].bio}
          />
        </StudentCard>
      )}
    </div>
  );
};
export default FindStudents;
