import { styled, Button } from "@mui/material";

export const ButtonVideo = styled(Button)(() => ({
  fontSize: "18px",
  color: "black",
  width: "90%",
  heigth: "7rem",
  margin: "0 auto",
  backgroundColor: "#D0FE19",
  fontWeight: "400",
  "&:hover": {
    backgroundColor: "#E0CF47",
  },
}));
