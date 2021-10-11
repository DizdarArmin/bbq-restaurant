import { initializeApp } from "firebase/app";
import "firebase/storage";

const firebaseConfiguration = {
  apiKey: "AIzaSyBlnzAqeozUcyH-oYe5ftpatkHHKDegjH4",
  authDomain: "roastello.firebaseapp.com",
  projectId: "roastello",
  storageBucket: "roastello.appspot.com",
  messagingSenderId: "190287737636",
  appId: "1:190287737636:web:c5662f4219546a9c93f9b1",
};

const firebaseInstance = initializeApp(firebaseConfiguration);

export default firebaseInstance;
