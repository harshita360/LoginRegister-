import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBS9Oo6K8aHy3UC0ZkV2YYEz7mlGqU_NUk",
  authDomain: "users-34968.firebaseapp.com",
  databaseURL: "https://users-34968.firebaseio.com",
  projectId: "users-34968",
  storageBucket: "users-34968.appspot.com",
  messagingSenderId: "825171249093",
  appId: "1:825171249093:web:9694b3aa8a6fdc658fadac",
};

const fire = firebase.initializeApp(config);
export default fire;
