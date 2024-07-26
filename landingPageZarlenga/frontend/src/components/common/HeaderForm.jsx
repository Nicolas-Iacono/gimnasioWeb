import React from 'react'
import {
  Grid,
  Button,
  Container,
  Typography,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import { ButtonVideo } from "./ButtonVideo";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
export const HeaderForm = ({onClose}) => {
  return (
    <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "3rem",
          marginTop: "-3rem",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "white" }}
        >
          Contacto
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{ color: "white", fontSize: "large" }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Grid>
  )
}

export default HeaderForm