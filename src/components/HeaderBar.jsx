"use client";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function HeaderBar({ title = "TiMed", onProfileClick }) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "#1976d2",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1.2,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 0.5,
              fontSize: "1.2rem",
              color: "#1976d2",
            }}
          >
            {title}
          </Typography>
        </Box>

        <IconButton onClick={onProfileClick} edge="end" size="large">
          <AccountCircleIcon sx={{ color: "#1976d2" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
