import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";

const Form = ({ title, setEmail, setPassword, handleAction, googleSignIn }) => {
      //   console.log("setEmail ", setEmail);
      return (
            <>
                  <div className='heading-container'>
                        <h3>{title} Form</h3>
                  </div>
                  <div className='form'>
                        <Box
                              component='form'
                              sx={{
                                    "& > :not(style)": { m: 1, width: "25ch" },
                              }}
                              noValidate
                              autoComplete='off'
                        >
                              <TextField
                                    id='email'
                                    label='Enter the Email'
                                    variant='outlined'
                                    onChange={(e) => setEmail(e.target.value)}
                              />
                              <TextField
                                    id='password'
                                    label='Enter the Password'
                                    variant='outlined'
                                    onChange={(e) =>
                                          setPassword(e.target.value)
                                    }
                              />
                        </Box>
                        <div>
                              <Button
                                    className='btn'
                                    title='Login'
                                    Action={handleAction}
                              />
                              <Button
                                    className='btn'
                                    title='Login with Google'
                                    Action={googleSignIn}
                              />
                        </div>
                  </div>
            </>
      );
};

export default Form;
