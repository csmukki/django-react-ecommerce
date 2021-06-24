import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh62mzbBjEF85vbVYKZY6iAR-wSToI2Hw",
  authDomain: "django-react-ecommerce-78dbd.firebaseapp.com",
  projectId: "django-react-ecommerce-78dbd",
  storageBucket: "django-react-ecommerce-78dbd.appspot.com",
  messagingSenderId: "375602046845",
  appId: "1:375602046845:web:d5dd196cece6287a7cce14",
  measurementId: "G-FKV5Z3QKHN",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export async function createUserProfileDocument(authUser, ...additionalData) {
  if (!authUser) return null;

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      alert("Error saving user to firestore...");
    }
  }

  return userRef;
}

export default firebase;
