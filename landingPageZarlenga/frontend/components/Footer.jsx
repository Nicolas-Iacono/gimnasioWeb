import { Grid, Box } from "@mui/material";
import insta from "../public/assets/instagram (4).png";
export const Footer = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        backgroundColor: "black",
      }}
    >
      <Box>
        <a
          href="https://www.instagram.com/movimientocon.siente/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta.src} alt="Instagram" width="60" />
        </a>
      </Box>
    </Grid>
  );
};
export default Footer;
