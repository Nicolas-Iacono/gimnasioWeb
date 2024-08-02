import { Typography, styled, Grid } from "@mui/material";
import foto from "../public/images/inicioCel.png";
export const Titulo = styled(Typography)(() => ({}));

export const ContainerImg = styled(Grid)(() => ({
  width: "100%",
  backgroundImage: `url(${foto.src})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  marginTop: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "14rem",
}));

export const ContainerForm = styled(Grid)(() => ({
  width: "100%",
  marginTop: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "14rem",
}));
export const ContainerBtn = styled(Grid)(() => ({
  width: "100%",
  marginTop: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "5rem",
  flexDirection: "column",
}));

export const TextContainer = styled(Grid)(() => ({
  width: "100%",
  marginTop: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ParrafoSub = styled(Typography)(() => ({
  fontSize: "20px",
  color: "white",
  width: "90%",
  textAlign: "center",
  margin: "0 auto",
  display: "flex",
  textDecoration: "underline",
  textDecorationColor: "white",
  textDecorationThickness: "1.7px",
}));

export const Parrafo900 = styled(Typography)(() => ({
  fontSize: "21px",
  color: "white",
  width: "90%",
  textAlign: "center",
  margin: "0 auto",

  fontWeight: "800",
}));

export const Parrafo600 = styled(Typography)(() => ({
  fontSize: "20px",
  color: "white",
  width: "90%",
  textAlign: "center",
  margin: "0 auto",
  display: "flex",

  fontWeight: "600",
}));
export const Parrafo400 = styled(Typography)(() => ({
  fontSize: "18px",
  color: "white",
  width: "90%",
  textAlign: "center",
  margin: "0 auto",
  fontWeight: "400",
}));
