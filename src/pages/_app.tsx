import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { AppProps } from "next/app";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "./fonts.css";
import React from "react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeRegistry>
      <AppBar position="fixed" sx={{ zIndex: 2000 }}>
        <Toolbar sx={{ backgroundColor: "background.paper" }}>
          <DashboardIcon
            sx={{
              color: "#444",
              mr: 2,
              transform: "translateY(-2px)",
            }}
          />
          <Typography variant="h6" noWrap component="div" color="black">
            Next.js App Router
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          mt: ["48px", "56px", "64px"],
          p: 3,
        }}
      >
        <Container>
          <Component {...pageProps} />
        </Container>
      </Box>
    </ThemeRegistry>
  );
}
