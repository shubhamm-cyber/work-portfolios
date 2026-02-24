import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import { styled } from "@mui/system";

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#0b0b0b",
  minHeight: "92vh",
  display: "flex",
  alignItems: "center",
  color: "#fff",
  overflow: "hidden",
}));

const BackgroundOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), repeating-linear-gradient(-25deg, rgba(0,180,150,0.022) 0 2px, transparent 2px 20px)",
  animation: "bgShift 18s linear infinite",
  "@keyframes bgShift": {
    from: { backgroundPosition: "0 0" },
    to: { backgroundPosition: "2000px 0" },
  },
});

const GlassOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.85))",
});

const HeroContent = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  maxWidth: "980px",
  padding: theme.spacing(6, 3),
}));

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroWrapper>
      <BackgroundOverlay />
      <GlassOverlay />
      <HeroContent>
        <Typography
          variant="overline"
          sx={{ color: "#bdbdbd", letterSpacing: "1px", fontWeight: 600 }}
        >
          SOC Analyst | Threat Detection | Incident Investigation | Security Automation
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            lineHeight: 1.1,
            mt: 1,
          }}
        >
          Stopping Cyber Threats{" "}
          <Box component="span" sx={{ color: "#00bcd4" }}>
            Before They Stop You
          </Box>
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ color: "#bdbdbd", mt: 2, maxWidth: "820px", mx: "auto" }}
        >
          I detect, automate response, and investigate advanced threats
          {/* — Splunk • Sentinel • Tines • LimaCharlie */}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#00bcd4",
              color: "#000",
              fontWeight: 600,
              px: 4,
              borderRadius: "22px",
              "&:hover": { bgcolor: "#00acc1" },
            }}
            onClick={() => scrollToSection("portfolio")}
          >
            See My Work
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              fontWeight: 600,
              px: 4,
              borderRadius: "22px",
              "&:hover": { borderColor: "#00bcd4", color: "#00bcd4" },
            }}
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
        </Stack>
      </HeroContent>
    </HeroWrapper>
  );
}

