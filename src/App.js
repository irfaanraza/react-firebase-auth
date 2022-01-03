import React, { useState, useEffect } from "react";
import {
      BrowserRouter as Router,
      Routes,
      Route,
      useNavigate,
} from "react-router-dom";
import { app } from "./firebase";
import {
      getAuth,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
} from "firebase/auth";
import Form from "./components/common/Form";
import Home from "./components/Home";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      useEffect(() => {
            let authToken = sessionStorage.getItem("Auth Token");

            if (authToken) {
                  navigate("/home");
            }
      }, []);
      const googleSignIn = () => {
            let google_provider = new app.getAuth.GoogleAuthProvider();
            app.getAuth()
                  .signInWithPopup(google_provider)
                  .then((res) => {
                        console.log(res);
                  });
      };

      let navigate = useNavigate();
      const handleAction = (id) => {
            const authentication = getAuth();
            try {
                  if (id === 2) {
                        createUserWithEmailAndPassword(
                              authentication,
                              email,
                              password
                        ).then((response) => {
                              navigate("/home");
                              sessionStorage.setItem(
                                    "Auth Token",
                                    response._tokenResponse.refreshToken
                              );
                              console.log("session data:");
                        });
                  }
                  if (id === 1) {
                        signInWithEmailAndPassword(
                              authentication,
                              email,
                              password
                        ).then((response) => {
                              navigate("/home");
                              sessionStorage.setItem(
                                    "Auth Token",
                                    response._tokenResponse.refreshToken
                              );
                        });
                  }
            } catch (error) {
                  if (error.code === "auth/wrong-password") {
                        toast("Please check the Password", {
                              position: "top-right",
                              autoClose: 5000,
                        });
                  }
                  if (error.code === "auth/user-not-found") {
                        toast("Please check the Email", {
                              position: "top-right",
                              autoClose: 5000,
                        });
                  }
                  if (error.code === "auth/email-already-in-use") {
                        toast("Email Already in Use", {
                              position: "top-right",
                              autoClose: 5000,
                        });
                  }
            }
      };

      return (
            <div className='App'>
                  <>
                        <Routes>
                              <Route path='/home' element={<Home />} />
                              <Route
                                    path='/login'
                                    element={
                                          <Form
                                                title='Login'
                                                setEmail={setEmail}
                                                setPassword={setPassword}
                                                handleAction={() =>
                                                      handleAction(1)
                                                }
                                          />
                                    }
                              />
                              <Route
                                    path='/register'
                                    element={
                                          <Form
                                                setEmail={setEmail}
                                                setPassword={setPassword}
                                                handleAction={() =>
                                                      handleAction(2)
                                                }
                                                title='Register'
                                          />
                                    }
                              />
                        </Routes>
                  </>
                  <ToastContainer position='top-right' autoClose={5000} />
            </div>
      );
}
export default App;
