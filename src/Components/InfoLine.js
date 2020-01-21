import React from "react";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

const InfoLine = props => {
  return (
    <div style={{ display: "flex", margin: 4 }}>
      <Icon>{props.icon}</Icon>
      <Typography style={{ marginLeft: 8 }}>{props.text}</Typography>
    </div>
  );
};

export default InfoLine;
