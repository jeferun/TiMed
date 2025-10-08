"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";

/**
 * Modal reutilizable para agregar o editar medicamentos.
 * Props:
 * - open (boolean): controla si el modal está visible.
 * - onClose (function): función para cerrar el modal.
 * - onSave (function): callback al guardar (retorna objeto medicamento).
 * - initialData (object): datos iniciales si se va a editar.
 */

export default function MedicationFormModal({
  open,
  onClose,
  onSave,
  initialData = null,
}) {
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    time: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.dosage || !form.time) {
      alert("Por favor completa todos los campos");
      return;
    }

    onSave(form);
    setForm({ name: "", dosage: "", time: "" });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: { borderRadius: 3, p: 1 },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#1976d2",
        }}
      >
        {initialData ? "Editar Medicamento" : "Agregar Medicamento"}
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 1,
          }}
        >
          <TextField
            label="Nombre del medicamento"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Dosis (ej. 500mg)"
            name="dosage"
            value={form.dosage}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Hora de toma"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button onClick={onClose} sx={{ textTransform: "none" }}>
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            bgcolor: "#1976d2",
            textTransform: "none",
            borderRadius: 2,
            px: 3,
            ":hover": { bgcolor: "#115293" },
          }}
        >
          {initialData ? "Guardar cambios" : "Guardar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
