import React from "react";
import Button from "@mui/material/Button";
import "../../App.css";

const ButtonComponent = ({ title, Action }) => {
      console.log("button component:", title);
      return (
            <>
                  <Button variant='contained' onClick={Action} className='btn'>
                        {title}
                  </Button>
            </>
      );
};

export default ButtonComponent;
