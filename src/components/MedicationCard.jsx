"use client";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";

export default function MedicationCard({ med, onToggle, onEdit }) {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 3,
        mb: 2,
        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
        bgcolor: med.taken ? "#e8f5e9" : "#fff",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              textDecoration: med.taken ? "line-through" : "none",
              color: med.taken ? "text.secondary" : "text.primary",
            }}
          >
            {med.name}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Typography variant="body2" color="text.secondary">
              {med.dosage}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • {med.time}
            </Typography>
          </Stack>
        </Box>

        <Box>
          <IconButton
            color={med.taken ? "success" : "default"}
            onClick={() => onToggle(med.id)}
            size="large"
          >
            <CheckCircleIcon />
          </IconButton>
          <IconButton color="primary" onClick={() => onEdit(med)} size="large">
            <EditIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
