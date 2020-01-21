import React from "react";
import Typography from "@material-ui/core/Typography";
import "../Screens/FindStudents.css";

const StudentBrief = props => {
  const { name, bio } = props;
  return (
    <div className="Find-text-container">
      <Typography className="Find-text-style">
        {name}: {bio}
      </Typography>
    </div>
  );
};
export default StudentBrief;
