// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
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

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
