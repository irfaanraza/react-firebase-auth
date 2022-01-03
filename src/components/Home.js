import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
      let navigate = useNavigate();
      const handleLogout = () => {
            sessionStorage.removeItem("Auth Token");
            navigate("/login");
      };

      useEffect(() => {
            let authToken = sessionStorage.getItem("Auth Token");

            if (authToken) {
                  navigate("/home");
            }
            if (!authToken) {
                  navigate("/login");
            }
      }, []);

      return (
            <div>
                  <h2>Home Page</h2>
                  <Button onClick={handleLogout} variant='contained'>
                        Logout
                  </Button>
            </div>
      );
};

export default Home;
