import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
      apiKey: "AIzaSyBE0aOvMvS378bh_Ad2LeI9jWMnHUJCxD8",
      authDomain: "react-firebase-authentic-4d7b5.firebaseapp.com",
      projectId: "react-firebase-authentic-4d7b5",
      storageBucket: "react-firebase-authentic-4d7b5.appspot.com",
      messagingSenderId: "561702727672",
      appId: "1:561702727672:web:016ea557095ded9546f00d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = app.firestore();

const signInWithEmailAndPassword = async (email, password) => {
      try {
            await auth.signInWithEmailAndPassword(email, password);
      } catch (err) {
            console.error(err);
            alert(err.message);
      }
};

const registerWithEmailAndPassword = async (name, email, password) => {
      try {
            const res = await auth.createUserWithEmailAndPassword(
                  email,
                  password
            );
            const user = res.user;
            await db.collection("users").add({
                  uid: user.uid,
                  name,
                  authProvider: "local",
                  email,
            });
      } catch (err) {
            console.error(err);
            alert(err.message);
      }
};

// const registerWithEmailAndPassword = async (name, email, password) => {
//       try {
//             const res = await auth.createUserWithEmailAndPassword(
//                   email,
//                   password
//             );
//             const user = res.user;
//             await db.collection("users").add({
//                   uid: user.uid,
//                   name,
//                   authProvider: "local",
//                   email,
//             });
//       } catch (err) {
//             console.error(err);
//             alert(err.message);
//       }
// };

const sendPasswordResetEmail = async (email) => {
      try {
            await auth.sendPasswordResetEmail(email);
            alert("Password reset link sent!");
      } catch (err) {
            console.error(err);
            alert(err.message);
      }
};

const logout = () => {
      auth.signOut();
};

export {
      auth,
      db,
      signInWithEmailAndPassword,
      registerWithEmailAndPassword,
      sendPasswordResetEmail,
      logout,
};
