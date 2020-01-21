import firebase from "firebase/app";
import "firebase/firestore";
import firebaseKeys from "./firebaseKeys.json";

firebase.initializeApp(firebaseKeys);

export const setUser = user => {
  const db = firebase.firestore();
  db.collection("users")
    .doc(user.gitHubUser)
    .set(user, { merge: true });
};

export const getUsers = async () => {
  const db = firebase.firestore();
  const querySnapshot = await db.collection("users").get();
  const users = {};
  querySnapshot.forEach(doc => {
    users[doc.id] = doc.data();
  });
  return users;
};

export const likeUser = (user, myId) => {
  const db = firebase.firestore();
  const setObject = {};
  setObject[myId] = true;
  db.collection("likes")
    .doc(user.gitHubUser)
    .set(setObject, { merge: true });
};

export const checkLikes = async myId => {
  const db = firebase.firestore();
  const querySnapshot = await db.collection("likes").get();
  const likes =
    querySnapshot && querySnapshot.docs.filter(doc => doc.id === myId)[0];
  return likes && likes.data();
};

export const setMatch = (matchUser, myId) => {
  const db = firebase.firestore();
  const newStudentMine = {};
  const newStudentYours = {};
  newStudentMine[matchUser.gitHubUser] = true;
  newStudentYours[myId] = true;

  db.collection("matchs")
    .doc(myId)
    .set(newStudentMine, { merge: true });
  db.collection("matchs")
    .doc(matchUser.gitHubUser)
    .set(newStudentYours, { merge: true });
};

export const getMatch = async myId => {
  const db = firebase.firestore();
  const querySnapshot = await db.collection("matchs").get();
  const userMatchs =
    querySnapshot && querySnapshot.docs.filter(doc => doc.id === myId)[0];
  return userMatchs && userMatchs.data();
};
