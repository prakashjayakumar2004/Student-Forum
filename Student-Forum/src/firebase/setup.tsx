import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


/*const firebaseConfig = {
  apiKey: "AIzaSyBBsPuTuYPOioynPu_HghfN_iToNcIa1R0",
  authDomain: "quora-clone-14072.firebaseapp.com",
  projectId: "quora-clone-14072",
  storageBucket: "quora-clone-14072.appspot.com",
  messagingSenderId: "164305275861",
  appId: "1:164305275861:web:37bd05d8ddc17da30f0b5c"
};  */

const firebaseConfig = {
  apiKey: "AIzaSyBUn-SsYCw0ZgaEuGQOalfYbw84B2mxxus",
  authDomain: "students-forums.firebaseapp.com",
  projectId: "students-forums",
  storageBucket: "students-forums.firebasestorage.app",
  messagingSenderId: "28312444682",
  appId: "1:28312444682:web:57d3db17543f5ab56aa4f3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const storage = getFirestore(app)
