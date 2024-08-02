import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import LogoLZ from "../public/assets/logoLzCel.png";
import { Divider } from "@mui/material";
import TeamEnfocados from "../public/assets/teamEnfocados.png";
export const NavBar = (props) => {
  function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "#D0FE19",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "0 20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                gap: "1rem",
              }}
            >
              <img src={LogoLZ.src} alt="logo LZ" width="60" />
              <Divider orientation="vertical" variant="middle" flexItem />
              <img src={TeamEnfocados.src} alt="movimiento consiente" />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};
