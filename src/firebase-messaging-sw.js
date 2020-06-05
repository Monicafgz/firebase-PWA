importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js");
var config = {
  apiKey: "AIzaSyB9KoAdEBMvb6fvfjb1-mcSwC9RMK1U4aw",
  authDomain: "pwa-monica.firebaseapp.com",
  databaseURL: "https://pwa-monica.firebaseio.com",
  projectId: "pwa-monica",
  storageBucket: "pwa-monica.appspot.com",
  messagingSenderId: "625423513453",
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const title = "My name";
  const options = {
    body: payload.data.body,
  };
  return self.registration.showNotification(title, options);
});
