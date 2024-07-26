import React from "react";
import { useFormik } from "formik";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2'
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
import HeaderForm from "./HeaderForm";
import { postFetch } from "../api/useFetch";
import "../styles/form.css"



const urlUser = "http://localhost:4000/user"

const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(2, "Nombre muy corto")
    .max(50, "Nombre muy largo")
    .required("Nombre es requerido"),
  email: Yup.string().email("Email inválido").required("Email es requerido"),
  mensaje: Yup.string()
    .min(10, "Mensaje muy corto")
    .required("Mensaje es requerido"),
});

export const FormContainer = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      edad: "",
      peso: "",
      altura: "",
      email: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .max(50, "El nombre debe tener 50 caracteres o menos")
        .required("El nombre es requerido"),
      apellido: Yup.string()
        .max(50, "El apellido debe tener 50 caracteres o menos")
        .required("El apellido es requerido"),
      edad: Yup.number()
        .min(0, "La edad no puede ser negativa")
        .max(120, "La edad no puede ser mayor a 120")
        .required("La edad es requerida"),
      peso: Yup.number()
        .min(0, "El peso no puede ser negativo")
        .required("El peso es requerido"),
      altura: Yup.number()
        .min(0, "La altura no puede ser negativa")
        .required("La altura es requerida"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es requerido"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await postFetch(urlUser, values);
        console.log(response);
        
        Swal.fire({
          title: "Gracias por suscribirte",
          text: "Revisa en tu correo para obtener tu indice de masa corporal",
          icon: "success"
        });
        // Maneja el éxito, como mostrar un mensaje o redirigir al usuario
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        // Maneja el error, como mostrar un mensaje de error al usuario
      }
    },
  });

  return (
    <Container maxWidth="sm" sx={{ marginBottom: "3rem", marginTop: "3rem" }}>
      <HeaderForm onClose={onClose}/>

      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "2rem",
          }}
        >
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: "white" }}
              fullWidth
              id="nombre"
              name="nombre"
              label="Nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.nombre && Boolean(formik.errors.nombre)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: "white" }}
              fullWidth
              id="apellido"
              name="apellido"
              label="Apellido"
              value={formik.values.apellido}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.apellido && Boolean(formik.errors.apellido)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: "white" }}
              fullWidth
              id="edad"
              name="edad"
              label="Edad"
              type="number"
              value={formik.values.edad}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.edad && Boolean(formik.errors.edad)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: "white" }}
              fullWidth
              id="peso"
              name="peso"
              label="Peso (kg)"
              type="number"
              value={formik.values.peso}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.peso && Boolean(formik.errors.peso)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: "white" }}
              fullWidth
              id="altura"
              name="altura"
              label="Altura (cm)"
              type="number"
              value={formik.values.altura}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.altura && Boolean(formik.errors.altura)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: "white" }}
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                backgroundColor: "#D0FE19",
                color: "black",
                "&:hover": { backgroundColor: "yellow" },
              }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
