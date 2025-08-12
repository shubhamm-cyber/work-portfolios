import React from "react";
import { Box, Typography, Container, Grid, Button, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import azureSOCImage from "../assets/images/Azure.png"; // Replace with your real screenshot
import splunkSOCImage from "../assets/images/Splunk.png"; // Replace with your real screenshot

const SectionWrapper = styled(Box)(({ theme }) => ({
  background: "linear-gradient(180deg, #101820 0%, #0b0b0b 100%)",
  color: "#fff",
  padding: theme.spacing(10, 0),
}));

const projects = [
  {
    title: "Cloud SOC: End-to-End Detection, Investigation & SOAR Automation",
    subtitle: "(Azure Sentinel + Logic Apps)",
    image: azureSOCImage,
    link: "https://shubhamahirrao.notion.site/End-to-End-Detection-Investigation-Automated-Response-Workflow-in-Azure-Cloud-Environment-2462e78c860a80978c70fef1fedd0d32?pvs=73", // Replace with your link
    bullets: [
      "Designed & deployed a complete SOC architecture in Azure.",
      "Integrated Azure Sentinel for centralized SIEM monitoring.",
      "Built custom analytics rules for real-time threat detection.",
      "Automated incident response workflows using Logic Apps.",
      "Performed full incident lifecycle: detection → triage → remediation."
    ]
  },
  {
    title: "Hands-On SOC Workflow: Detect, Investigate, Automate",
    subtitle: "(Splunk, Tines, Slack)",
    image: splunkSOCImage,
    link: "https://shubhamahirrao.notion.site/Hands-On-SOC-Workflow-Detect-Investigate-Automate-1dc2e78c860a8071b899dde507ec9b41?pvs=74", // Replace with your link
    bullets: [
      "Built a real-world SOC workflow integrating Splunk, Tines, and Slack.",
      "Created detection rules for suspicious logins & malware activity.",
      "Automated alerts to Slack channels for instant SOC awareness.",
      "Used Tines to orchestrate multi-step automated investigations.",
      "Closed incidents faster by eliminating repetitive manual steps."
    ]
  }
];

export default function FlagshipPortfolioSection() {
  return (
    <SectionWrapper id="portfolio">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            textAlign: "center",
            color: "#00bcd4",
            fontSize: { xs: "2rem", md: "3rem" }
          }}
        >
          Flagship Projects
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#bdbdbd",
            textAlign: "center",
            mb: 8,
            fontSize: { xs: "1rem", md: "1.25rem" }
          }}
        >
          Real-world SOC implementations showcasing deep technical expertise and end-to-end execution.
        </Typography>

        {projects.map((proj, index) => (
          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{ mb: 12 }}
            key={index}
            direction={index % 2 === 0 ? "row" : { xs: "column-reverse", md: "row-reverse" }}
          >
            {/* Left/Text */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "#fff",
                  lineHeight: 1.3
                }}
              >
                {proj.title} <br />
                <span style={{ color: "#00bcd4" }}>{proj.subtitle}</span>
              </Typography>

              <List sx={{ color: "#bdbdbd", mb: 4 }}>
                {proj.bullets.map((point, i) => (
                  <ListItem key={i} disablePadding>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>

              <Button
                variant="contained"
                size="large"
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#00bcd4",
                  color: "#000",
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#00acc1"
                  }
                }}
              >
                View Full Project
              </Button>
            </Grid>

            {/* Right/Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={proj.image}
                alt={proj.title}
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 0 40px rgba(0, 188, 212, 0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 0 50px rgba(0, 188, 212, 0.5)"
                  }
                }}
              />
            </Grid>
          </Grid>
        ))}
      </Container>
    </SectionWrapper>
  );
}



