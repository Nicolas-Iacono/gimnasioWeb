import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ParrafoSub,
  TextContainer,
  Parrafo600,
  Parrafo900,
  Parrafo400,
  ContainerImg,
  ContainerBtn
} from "../common/Textos";
import { FormContainer } from "../common/Form";
import { ButtonVideo } from "../common/ButtonVideo";
import {fetchMessages} from "../../../../backend/mensajesService"
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import Footer from "../layout/Footer";
const Home = () => {
  const [mensajes, setMensajes] = useState([]);
  const [form, setForm] = useState(false)


    const formHandleClick = () => {
      setForm(!form)
  
    }
    

  

  const handleClick = async () => {
    try {
      const messages = await fetchMessages("http://localhost:4000/messages");

      if (messages.length > 0) {
        setMensajes(messages)
        
      } else {
        setMensajes([{
          nombre: 'No hay mensajes',
          content: 'No se encontraron mensajes.'
        }]);
      }
    } catch (e) {
      console.error("Error fetching messages: ", e);
      setMensajes([{
        nombre: 'Error',
        content: 'No se pudo obtener el mensaje'
      }]);
    }
  };



  return (
   <>

      {form ? 


        (
        <Box
        sx={{
          position:'fixed',
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparente
          zIndex: 2, // Debajo del formulario
          overflow: 'auto', 
        }}>

        <Paper sx={{backgroundColor:"black",padding:"1rem", width:"90%", margin:"0 auto", borderRadius:"10px", marginTop:"4rem"}}>
          <FormContainer  onClose={formHandleClick}/>
        </Paper>
        </Box>
        
      
      ) : 
        
        ( <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black",
            width: "100%",
            height:"190vh"
          }}
        >
        <TextContainer sx={{ flexDirection: "column", gap: "1rem" }}>
        <Parrafo900 variant="h1" sx={{ color: "" }}>
          TEAM ENFOCADOS <br />Leandro Zarlenga
        </Parrafo900>
        <Parrafo900 variant="p" sx={{textTransform:"uppercase"}}>
          ¿Estas intencionando un cambio <span style={{ backgroundColor: "#D0FE19", color: "black", padding: "0 1px" }}>fisico-mental</span>  y no sabes como lograrlo o te sentis desmotivado?
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
          tu fisico sin pasar hambre o entrenar Miles de horas
        </ParrafoSub>
      </TextContainer>

      <ContainerImg />

      <TextContainer>
        <Parrafo400>
          <span style={{ fontWeight: "600px" }}>La mejor parte:</span> aplica para vos incluso si no tuviste buenos
          resultados en el pasado o si nunca entrenaste
        </Parrafo400>
      </TextContainer>

      <ContainerBtn>
        <ButtonVideo onClick={handleClick}>
          Ver video
        </ButtonVideo>
        
        <Typography sx={{ color: "white", fontSize: "17px" }}>
          (Programa disponible por tiempo limitado)
        </Typography>
      </ContainerBtn>
     
   
      <TextContainer sx={{flexDirection:"column"}}>
      <ButtonVideo onClick={formHandleClick}>
        QUIERO SER PARTE
      </ButtonVideo> 
        <PanToolAltIcon color="white" sx={{color:"white", fontSize:"large"}}/>
        <Parrafo900 sx={{fontStyle:"italic"}}>
          Completa el formulario para conocer tu indice de masa corporal
        </Parrafo900>
      </TextContainer>
      <TextContainer sx={{flexDirection:"column"}}>
   
      <Footer/>
      <Box>
      <Typography sx={{color:"white", textAlign:"center"}}>
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
