"use client";
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", email);
    // Aquí luego integrarás Firebase Auth o API backend
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
          TiMed
        </Typography>

        <Typography variant="body2" align="center" sx={{ mb: 4 }}>
          Inicia sesión para continuar
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Iniciar sesión
          </Button>
        </form>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 3, color: "text.secondary" }}
        >
          ¿No tienes cuenta?{" "}
          <Link
            href="/register"
            underline="hover"
            sx={{ color: "#1976d2", fontWeight: "500" }}
          >
            Crear cuenta
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
