import { Grid, Typography, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PropTypes from "prop-types";
export const HeaderForm = ({ onClose }) => {
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
      <IconButton onClick={onClose} sx={{ color: "white", fontSize: "large" }}>
        <CloseRoundedIcon />
      </IconButton>
    </Grid>
  );
};
HeaderForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default HeaderForm;
