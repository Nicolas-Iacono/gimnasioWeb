import { Box, Grid, Paper, Typography, Modal } from "@mui/material";
import { useState } from "react";
import {
  ParrafoSub,
  TextContainer,
  Parrafo600,
  Parrafo900,
  Parrafo400,
  ContainerImg,
  ContainerBtn,
} from "../components/Textos";
import { FormContainer } from "../components/Form";
import { ButtonVideo } from "../components/ButtonVideo";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import Footer from "../components/Footer";
import GrillaFotos from "../components/GrillaFotos";

const Home = () => {
  const [form, setForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [vid, setVid] = useState(null);

  const handleOpen = () => {
    setVid(vid);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVid(null);
  };

  const formHandleClick = () => {
    setForm(!form);
  };

  return (
    <>
      {form ? (
        <Box
          sx={{
            position: "fixed",
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 2,
            overflow: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={24}
            sx={{
              backgroundColor: "black",
              padding: "1rem",
              width: "90%",
              borderRadius: "10px",
              animation: "zoomIn 0.5s ease-in-out",
            }}
          >
            <FormContainer onClose={formHandleClick} />
          </Paper>
        </Box>
      ) : (
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black",
            width: "100%",
            height: "240vh",
          }}
        >
          <TextContainer sx={{ flexDirection: "column", gap: "1rem" }}>
            <Parrafo900 variant="h1" sx={{ color: "" }}>
              TEAM ENFOCADOS <br />
              Leandro Zarlenga
            </Parrafo900>
            <Parrafo900 variant="p" sx={{ textTransform: "uppercase" }}>
              ¿Estas intencionando un cambio{" "}
              <span
                style={{
                  backgroundColor: "#D0FE19",
                  color: "black",
                  padding: "0 1px",
                }}
              >
                fisico-mental
              </span>{" "}
              y no sabes como lograrlo o te sentis desmotivado?
            </Parrafo900>
          </TextContainer>

          <TextContainer>
            <Parrafo600>
              TE BRINDAMOS EL METODO MOVIMIENTO CONSCIENTE
            </Parrafo600>
          </TextContainer>

          <TextContainer>
            <ParrafoSub>
              Descubrí como podés transformar <br />
              tu fisico sin pasar hambre o entrenar Miles de horas
            </ParrafoSub>
          </TextContainer>

          <ContainerImg />

          <TextContainer>
            <Parrafo400>
              <span style={{ fontWeight: "600px" }}>La mejor parte:</span>{" "}
              aplica para vos incluso si no tuviste buenos resultados en el
              pasado o si nunca entrenaste
            </Parrafo400>
          </TextContainer>

          <ContainerBtn>
            <ButtonVideo onClick={() => handleOpen(vid)}>Ver video</ButtonVideo>
            <Modal
              open={open}
              onClose={handleClose}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  outline: "none",
                  top: "11rem",
                  position: "relative",
                }}
              >
                <iframe
                  width="100%"
                  height="50%"
                  src="/video/2704034645737880340.mp4"
                  title="Descubri nuestro equipo"
                  frameBorder="0"
                  allowFullScreen
                />
              </Box>
            </Modal>
            <Typography sx={{ color: "white", fontSize: "17px" }}>
              (Programa disponible por tiempo limitado)
            </Typography>
          </ContainerBtn>

          <GrillaFotos />

          <TextContainer sx={{ flexDirection: "column" }}>
            <ButtonVideo onClick={formHandleClick}>
              QUIERO SER PARTE
            </ButtonVideo>
            <PanToolAltIcon
              color="white"
              sx={{ color: "white", fontSize: "large" }}
            />
            <Parrafo900 sx={{ fontStyle: "italic" }}>
              Completa el formulario para conocer tu indice de masa corporal
            </Parrafo900>
          </TextContainer>
          <TextContainer sx={{ flexDirection: "column" }}>
            <Footer />
            <Box>
              <Typography sx={{ color: "white", textAlign: "center" }}>
                Movimiento Con.Siente || Todos los derechos reservados © 2024
              </Typography>
            </Box>
          </TextContainer>
        </Grid>
      )}
    </>
  );
};

export default Home;
