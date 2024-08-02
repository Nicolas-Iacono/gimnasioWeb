import React from "react";
import { useFormik } from "formik";
import { Form} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import {
  Grid,
  Button,
  Container,
  TextField,
} from "@mui/material";
import HeaderForm from "./HeaderForm";
import { postFetch } from "../hooks/useFetch";
import PropTypes from 'prop-types';
const API_URL = process.env.NODE_ENV === 'production'
? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
: process.env.NEXT_PUBLIC_API_URL_DESARROLLO;

const urlUser = `${API_URL}`;


export const FormContainer = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      lastname: "",
      age: "",
      weight: "",
      height: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(50, "El nombre debe tener 50 caracteres o menos")
        .required("El nombre es requerido"),
      lastname: Yup.string()
        .max(50, "El apellido debe tener 50 caracteres o menos")
        .required("El apellido es requerido"),
      age: Yup.number()
        .min(0, "La edad no puede ser negativa")
        .max(120, "La edad no puede ser mayor a 120")
        .required("La edad es requerida"),
      weight: Yup.number()
        .min(0, "El peso no puede ser negativo")
        .required("El peso es requerido"),
      height: Yup.number()
        .min(0, "La altura no puede ser negativa")
        .required("La altura es requerida"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es requerido"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await postFetch(`${urlUser}/api/user`, values);
        console.log(response);

        Swal.fire({
          title: "Gracias por suscribirte",
          text: "Revisa en tu correo para obtener tu indice de masa corporal",
          icon: "success",
        });
        // Maneja el éxito, como mostrar un mensaje o redirigir al usuario
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        // Maneja el error, como mostrar un mensaje de error al usuario
      }
    },
  });

  return (
    <Container maxWidth="sm" sx={{ marginBottom: "3rem", marginTop: "3rem" }}>
      <HeaderForm onClose={onClose} />

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
              id="username"
              name="username"
              label="nombre"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: "white" }}
              fullWidth
              id="lastname"
              name="lastname"
              label="apellido"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: "white" }}
              fullWidth
              id="age"
              name="age"
              label="altura"
              type="number"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.age && Boolean(formik.errors.age)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: "white" }}
              fullWidth
              id="weight"
              name="weight"
              label="peso (kg)"
              type="number"
              value={formik.values.weight}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.weight && Boolean(formik.errors.weight)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: "white" }}
              fullWidth
              id="height"
              name="height"
              label="Altura (cm)"
              type="number"
              value={formik.values.height}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.height && Boolean(formik.errors.height)}
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
Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  // Puedes agregar más validaciones de props según sea necesario
};
export default Form;

