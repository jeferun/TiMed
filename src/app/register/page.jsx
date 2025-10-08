"use client";
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Registro exitoso:", form);
    // Aquí conectarás con Firebase Auth o API backend
    router.push("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f7fa",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 380,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold", mb: 3, color: "#1976d2" }}
        >
          Crear cuenta
        </Typography>

        <Typography variant="body2" align="center" sx={{ mb: 4 }}>
          Regístrate para comenzar con TiMed
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre completo"
            name="name"
            value={form.name}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Correo electrónico"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Confirmar contraseña"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "#1976d2",
              py: 1.5,
              borderRadius: 2,
              fontWeight: "bold",
              textTransform: "none",
              ":hover": { bgcolor: "#115293" },
            }}
          >
            Registrarse
          </Button>
        </form>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 3, color: "text.secondary" }}
        >
          ¿Ya tienes cuenta?{" "}
          <Link
            href="/login"
            underline="hover"
            sx={{ color: "#1976d2", fontWeight: "500" }}
          >
            Iniciar sesión
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
