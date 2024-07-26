import { Grid, Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import palmera from "../../assets/palmera.jpg";
import azul from "../../assets/remereaAzul.jpg";
import blanca from "../../assets/remeraBlanca.jpg";
import abs from "../../assets/abs.jpg";
import fitnes from "../../assets/posicionEspejo.jpg";

const GrillaFotos = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const fotos = [fitnes, abs, blanca, azul];

  return (
    <>
      <Grid container sx={{ margin: "4rem auto", display: "flex", width: "100%", height: "18rem" }}>
        {fotos.map((foto, index) => (
          <Grid item key={index} sx={{ display: "flex", justifyContent: "center", gap: "10px", width: "45%", height: "40%", margin: "0 auto" }}>
            <Box
              sx={{
                width: "100%",
                backgroundImage: `url(${foto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: "no-repeat",
                transition: "filter 0.6s ease",
                '&:hover': {
                  filter: 'grayscale(100%)',
                },
              }}
              onClick={() => handleOpen(foto)}
            >
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: '80%',
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            outline: 'none',
          }}
        />
      </Modal>
    </>
  );
};

export default GrillaFotos;
