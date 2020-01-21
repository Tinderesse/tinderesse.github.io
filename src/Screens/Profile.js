import React from "react";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./Profile.css";

const Profile = props => {
  const defaultImage = "https://avatars2.githubusercontent.com/u/54108471?v=4";
  const [name, setName] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [image, setImage] = React.useState(defaultImage);
  const [gitHubUser, setGitHubUser] = React.useState("");

  const handleGitHubUserChange = event => {
    setGitHubUser(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleWhatsappChange = event => {
    setWhatsapp(event.target.value);
  };

  const handleBioChange = event => {
    setBio(event.target.value);
  };

  const saveChanges = () => {
    console.log("Cliquei em save");
  };

  const getGitHub = () => {
    console.log("Cliquei em pegar GitHub");
  };

  return (
    <div className="Profile-container">
      <Typography>Seu Perfil</Typography>
      <div className="Profile-info">
        <div className="Profile-picture-wrapper">
          <img
            src={image}
            alt="Foto de perfil"
            style={{ height: 140, width: 140 }}
          />
        </div>
        <form className="Profile-flex-full" noValidate autoComplete="off">
          <div className="Profile-form-wrapper">
            <TextField
              className="Profile-flex-full"
              id="github-username"
              value={gitHubUser}
              onChange={handleGitHubUserChange}
              label="Usuario do GitHub"
            />
            <TextField
              value={name}
              onChange={handleNameChange}
              className="Profile-flex-full"
              id="name"
              label="Nome"
            />
            <TextField
              value={whatsapp}
              onChange={handleWhatsappChange}
              className="Profile-flex-full"
              id="whatsapp"
              label="Whatsapp"
            />
          </div>
        </form>
      </div>
      <div className="Profile-info">
        <TextField
          multiline
          rowsMax="4"
          onChange={handleBioChange}
          value={bio}
          className="Profile-flex-full"
          id="bio"
          label="bio"
        ></TextField>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "space-around"
        }}
      >
        <Button onClick={getGitHub}>Buscar GitHub</Button>
        <Button onClick={saveChanges} color="primary">
          Salvar
        </Button>
      </div>
    </div>
  );
};
export default Profile;
