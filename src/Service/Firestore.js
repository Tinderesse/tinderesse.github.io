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
