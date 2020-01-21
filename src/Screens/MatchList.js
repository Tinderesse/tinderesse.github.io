import React from "react";
import Typography from "@material-ui/core/Typography";
import "./MatchList.css";
import MatchItem from "../Components/MatchItem";
import InfoLine from "../Components/InfoLine";

const MatchList = props => {
  const matchList = JSON.parse(localStorage.getItem("matchList")) || {};
  const keys = Object.keys(matchList);
  return (
    <div className="Match-container">
      <Typography>Seus Matches</Typography>
      {keys.map(student => (
        <MatchItem
          name={matchList[student].name}
          image={matchList[student].image}
          whatsapp={matchList[student].whatsapp}
        >
          <InfoLine icon="assignment_ind" text={matchList[student].name} />
          <InfoLine icon="chat" text={matchList[student].whatsapp} />
        </MatchItem>
      ))}
    </div>
  );
};

export default MatchList;
