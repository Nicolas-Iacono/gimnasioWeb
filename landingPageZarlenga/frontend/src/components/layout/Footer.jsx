import { Grid, Box } from "@mui/material";
import React from "react";
import insta from '../../assets/instagram (4).png'
import face from '../../assets/communication.png'
import { useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate()

  return (
    <Grid sx={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center", gap:"2rem", backgroundColor:"black"}}>
      <Box>
      <a href="https://www.instagram.com/movimientocon.siente/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" width="60" />
        </a>
      </Box>

    </Grid>
  );
};
export default Footer