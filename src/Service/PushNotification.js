import firebase from "firebase";
import firebaseKeys from "./firebaseKeys.json";

export const requestPermission = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("User Token:", token);
    return token;
  } catch (error) {
    console.log(error);
  }
};
