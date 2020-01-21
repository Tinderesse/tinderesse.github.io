import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SchoolIcon from "@material-ui/icons/School";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FaceIcon from "@material-ui/icons/Face";
import MatchList from "./Screens/MatchList";
import FindStudents from "./Screens/FindStudents";
import Profile from "./Screens/Profile";

import "./App.css";

function App() {
  const [tab, setTab] = React.useState(2);

  const ComponentsStack = [<MatchList />, <FindStudents />, <Profile />];

  return (
    <div className="App">
      <div className="App-body">
        <Card
          style={{
            flex: 1,
            marginTop: "1%",
            display: "flex",
            marginBottom: "1%",
            flexDirection: "column",
            width: "100%",
            maxWidth: 600
          }}
        >
          <CardContent
            style={{ flex: 1, display: "flex", flexDirection: "column" }}
          >
            {ComponentsStack[tab]}
          </CardContent>
          <CardActions style={{ display: "flex" }}>
            <BottomNavigation
              value={tab}
              onChange={(event, newTab) => {
                setTab(newTab);
              }}
              showLabels
              style={{ flex: 1 }}
            >
              <BottomNavigationAction label="Matches" icon={<FavoriteIcon />} />
              <BottomNavigationAction
                label="Estudantes"
                icon={<SchoolIcon />}
              />
              <BottomNavigationAction label="Perfil" icon={<FaceIcon />} />
            </BottomNavigation>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
