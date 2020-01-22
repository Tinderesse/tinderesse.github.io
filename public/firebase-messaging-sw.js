importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");
firebase.initializeApp({
  apiKey: "AIzaSyAhksSCNnFx65RofoPF1EoQmvPSLJB4Qwg",
  authDomain: "tinderesse.firebaseapp.com",
  databaseURL: "https://tinderesse.firebaseio.com",
  projectId: "tinderesse",
  storageBucket: "tinderesse.appspot.com",
  messagingSenderId: "711841806608",
  appId: "1:711841806608:web:36274ff6f7c713cff80d95",
  measurementId: "G-THSNK1HNHX"
});
const messaging = firebase.messaging();
