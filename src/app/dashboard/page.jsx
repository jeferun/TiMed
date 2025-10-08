"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Fab,
  Container,
  Fade,
  Slide,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import HeaderBar from "@/components/HeaderBar";
import MedicationCard from "@/components/MedicationCard";
import MedicationFormModal from "@/components/MedicationFormModal";

export default function DashboardPage() {
  const [meds, setMeds] = useState([
    { id: 1, name: "Losartán 50mg", dosage: "1 tableta", time: "08:00", taken: false },
    { id: 2, name: "Metformina 500mg", dosage: "1 tableta", time: "12:00", taken: true },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedMed, setSelectedMed] = useState(null);

  const handleToggleTaken = (id) => {
    setMeds((prev) =>
      prev.map((m) => (m.id === id ? { ...m, taken: !m.taken } : m))
    );
  };

  const handleAddMedication = (newMed) => {
    const id = meds.length + 1;
    setMeds([...meds, { id, ...newMed, taken: false }]);
  };

  const handleEditMedication = (updatedMed) => {
    setMeds((prev) =>
      prev.map((m) =>
        m.id === selectedMed.id ? { ...m, ...updatedMed } : m
      )
    );
  };

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Header fijo */}
      <HeaderBar
        title="Mis Medicamentos"
        onProfileClick={() => alert("Abrir perfil")}
      />

      {/* Contenedor principal */}
      <Container
        maxWidth="sm"
        sx={{
          pt: 10,
          pb: 12,
          px: 2,
        }}
      >
        {meds.length === 0 ? (
          <Fade in>
            <Box
              sx={{
                mt: 10,
                textAlign: "center",
                color: "text.secondary",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                No tienes medicamentos
              </Typography>
              <Typography variant="body2">
                Usa el botón (+) para agregar uno nuevo
              </Typography>
            </Box>
          </Fade>
        ) : (
          <Slide in direction="up">
            <Box>
              {meds.map((med) => (
                <MedicationCard
                  key={med.id}
                  med={med}
                  onToggle={handleToggleTaken}
                  onEdit={(m) => {
                    setSelectedMed(m);
                    setOpenModal(true);
                  }}
                />
              ))}
            </Box>
          </Slide>
        )}
      </Container>

      {/* FAB flotante */}
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          bgcolor: "#1976d2",
          boxShadow: "0 4px 10px rgba(25,118,210,0.3)",
          ":hover": { bgcolor: "#115293" },
        }}
        onClick={() => {
          setSelectedMed(null);
          setOpenModal(true);
        }}
      >
        <AddIcon />
      </Fab>

      {/* Modal agregar/editar */}
      <MedicationFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={selectedMed ? handleEditMedication : handleAddMedication}
        initialData={selectedMed}
      />
    </Box>
  );
}
