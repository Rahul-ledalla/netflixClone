import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyA-pbRb57izwF-EjcfsBhBqNu6RXoRdkeo",
  authDomain: "netflix-clone-821ed.firebaseapp.com",
  projectId: "netflix-clone-821ed",
  storageBucket: "netflix-clone-821ed.appspot.com",
  messagingSenderId: "786527124459",
  appId: "1:786527124459:web:1163bfaaa98d1bf583b7ae",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
