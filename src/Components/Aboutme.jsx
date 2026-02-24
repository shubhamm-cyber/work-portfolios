import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import profileImage from "../assets/images/white shirt.png"; // adjust the path as needed
import resumePdf from "../assets/images/ShubhamAhirrao_Resume.pdf"; // <-- add your resume here
import resumePdf2 from "../assets/images/Shubham_Ahirrao_2026.pdf";

const AboutWrapper = styled(Box)(({ theme }) => ({
  background: "linear-gradient(180deg, #0b0b0b 0%, #101820 100%)",
  color: "#fff",
  padding: theme.spacing(10, 0),
}));

const Highlight = styled("span")(({ theme }) => ({
  color: "#00bcd4",
  fontWeight: 700,
}));

export default function AboutMe() {
  return (
    <AboutWrapper id="about">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Image */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={profileImage}
              alt="Your profile"
              sx={{
                width: "100%",
                maxWidth: "380px",
                height: "auto",
                display: "block",
                margin: "0 auto",
                borderRadius: "16px",
                boxShadow: "0 0 30px rgba(0, 188, 212, 0.3)",
              }}
            />
          </Grid>

          {/* Right Column - Text */}
          <Grid item xs={12} md={7}>
            <Typography variant="overline" sx={{ color: "#bdbdbd", letterSpacing: 1 }}>
              Profile
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, lineHeight: 1.2 }}>
              Cybersecurity isn’t just my job — it’s my <Highlight>mission</Highlight>.
            </Typography>

            <Typography variant="body1" sx={{ color: "#bdbdbd", mt: 2, mb: 3 }}>
              I specialize in <Highlight>threat detection</Highlight>, <Highlight>incident response</Highlight>,
              and <Highlight>security automation</Highlight>. From designing SIEM rules to automating
              playbooks, I help organizations defend against evolving cyber threats.
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={6}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: "#00bcd4" }}>
                  3.1
                </Typography>
                <Typography variant="body2" sx={{ color: "#bdbdbd" }}>
                  Years Experience
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: "#00bcd4" }}>
                  {/* Add data if needed */}
                </Typography>
                <Typography variant="body2" sx={{ color: "#bdbdbd" }}>
                  {/* Add description */}
                </Typography>
              </Grid>
            </Grid>

            {/* Download Resume Button */}
            <Button
              component="a"
              href={resumePdf2}
              download="Shubham_Ahirrao_2026.pdf" // name of the file when downloaded
              variant="contained"
              sx={{
                bgcolor: "#00bcd4",
                color: "#000",
                fontWeight: 600,
                px: 4,
                borderRadius: "22px",
                "&:hover": { bgcolor: "#00acc1" },
              }}
            >
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </Container>
    </AboutWrapper>
  );
}




