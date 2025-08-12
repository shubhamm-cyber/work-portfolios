import React from "react";
import { Box, Typography, useMediaQuery, useTheme, IconButton, Link } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#0d0d0d",
        color: "#fff",
        padding: theme.spacing(3, 2),
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid rgba(0, 188, 212, 0.3)",
        gap: isMobile ? 1 : 0,
      }}
    >
      {/* Contact Info */}
      <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
        <Typography variant="body2" sx={{ fontSize: "0.95rem" }}>
          <Phone sx={{ fontSize: "1rem", mr: 1, color: "#00bcd4" }} />
          +91 8421574875
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "0.95rem" }}>
          <Email sx={{ fontSize: "1rem", mr: 1, color: "#00bcd4" }} />
          shubhamahirrao.cyber@gmail.com
        </Typography>
      </Box>

      {/* Social Links */}
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/shubham-ahirrao-1499b4340"
          target="_blank"
          sx={{ color: "#00bcd4", "&:hover": { color: "#00acc1" } }}
        >
          <LinkedIn />
        </IconButton>
        {/* <IconButton
          component={Link}
          href="https://github.com/your-github"
          target="_blank"
          sx={{ color: "#00bcd4", "&:hover": { color: "#00acc1" } }}
        >
          <GitHub />
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default Footer;

