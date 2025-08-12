import React from "react";
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import { styled } from "@mui/system";
import securityPlusLogo from "../assets/images/cert-securityplus.png";
import googleCyberLogo from "../assets/images/cert-google.png";

const SectionWrapper = styled(Box)(({ theme }) => ({
  background: "linear-gradient(180deg, #101820 0%, #0b0b0b 100%)",
  color: "#fff",
  padding: theme.spacing(10, 0),
}));

const certifications = [
  {
    name: "CompTIA Security+",
    logo: securityPlusLogo,
    link: "https://www.credly.com/badges/1a2c55c5-33d1-4287-8f8b-24464fb5241d/public_url",
  },
  {
    name: "Google Cybersecurity",
    logo: googleCyberLogo,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/DRGB9XN5T42W",
  },
];

export default function CertificationSection() {
  return (
    <SectionWrapper id="certifications">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            textAlign: "center",
            color: "#00bcd4",
          }}
        >
          Certifications
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            color: "#ccc",
            mb: 6,
          }}
        >
          Credentials that prove my expertise
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  bgcolor: "#1c1c1c",
                  borderRadius: "16px",
                  textAlign: "center",
                  p: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 0 20px rgba(0, 188, 212, 0.15)",
                  "&:hover": {
                    boxShadow: "0 0 30px rgba(0, 188, 212, 0.3)",
                    transform: "translateY(-5px)",
                    transition: "0.3s",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={cert.logo}
                  alt={cert.name}
                  sx={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    mx: "auto",
                    mt: 2,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#fff", mb: 2 }}
                  >
                    {cert.name}
                  </Typography>
                  <Button
                    variant="outlined"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#00bcd4",
                      borderColor: "#00bcd4",
                      "&:hover": { bgcolor: "rgba(0, 188, 212, 0.1)" },
                    }}
                  >
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}





