import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button } from "@mui/material";
import { styled } from "@mui/system";

const SectionWrapper = styled(Box)(({ theme }) => ({
  background: "#0d0d0d",
  color: "#fff",
  padding: theme.spacing(8, 0),
}));

const projects = [
  {
    title: "Conti Ransomware Incident Analysis Using Splunk",
    desc: "Analyzed security logs in Splunk to detect indicators of Conti ransomware and correlate anomalies, improving threat detection and mitigation.",
    link: "https://shubhamahirrao.notion.site/Conti-Ransomware-Incident-Analysis-Using-Splunk-66331583f134432f8512fc3cc38f68b8"
  },
  {
    title: "Malware Analysis using Wireshark",
    desc: "Captured and analyzed network traffic to detect malicious activity and understand malware behavior for effective mitigation.",
    link: "https://shubhamahirrao.notion.site/Malware-Analysis-using-Wireshark-5eaa7b64c38e4cac980db13a887563ea"
  },
  {
    title: "Incident Response Plan (IRP) for TechGuard Solutions",
    desc: "Created a detailed IRP outlining team roles, incident classification, and phased response to ensure quick recovery.",
    link: "https://shubhamahirrao.notion.site/Incident-Response-Plan-IRP-for-TechGuard-Solutions-3979771afbf444c19b09cb5afe16d87f"
  },
  {
    title: "Threat Analysis of a Malicious ChatGPT Browser Extension",
    desc: "Investigated a phishing campaign involving FakeGPT, detailing attacker tactics, clone site analysis, and payload delivery.",
    link: "https://shubhamahirrao.notion.site/Threat-Analysis-of-a-Malicious-ChatGPT-Browser-Extension-1832e78c860a805a80bae43220bf4bc4"
  },
  {
    title: "Network Traffic Analysis – Credential Theft Investigation",
    desc: "Investigated credential theft by analyzing logs and captured traffic to identify compromised machines, accounts, and attack scope.",
    link: "https://shubhamahirrao.notion.site/Network-Traffic-Analysis-Credential-Theft-Investigation-1892e78c860a801e86a3ea23c8b6b27f"
  },
  {
    title: "Malware Analysis Report – Tusk Campaign",
    desc: "Analyzed Tusk malware campaign, identifying hosting details, C2 IPs, and attacker cryptocurrency wallets.",
    link: "https://shubhamahirrao.notion.site/Malware-Analysis-Report-Tusk-Campaign-1962e78c860a8067afaaecf829d6c5d9"
  },
  {
    title: "Case Study – Multi-Stage Intrusion Investigation",
    desc: "Detected and contained a multi-stage intrusion by analyzing after-hours activity and implementing minimal-impact remediation.",
    link: "https://shubhamahirrao.notion.site/Case-Study-Multi-Stage-Intrusion-Investigation-1da2e78c860a8086a762dc343b2a1a0d"
  },
  {
    title: "SOAR EDR Project: LimaCharlie + Tines + Slack + Email",
    desc: "Integrated LimaCharlie with Tines, Slack, and Email for automated detection, machine isolation, and threat mitigation.",
    link: "https://shubhamahirrao.notion.site/SOAR-EDR-Project-Integrating-LimaCharlie-Tines-Slack-and-Email-for-Enhanced-Cybersecurity-e50e45293739466d8f4cc45bfb837827"
  }
];

export default function OtherProjectsSection() {
  return (
    <SectionWrapper id="other-projects">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 6,
            textAlign: "center",
            color: "#00bcd4",
            fontSize: { xs: "2rem", md: "3rem" }
          }}
        >
          Other Cybersecurity Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((proj, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#1a1a1a",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  boxShadow: "0 0 20px rgba(0, 188, 212, 0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 0 25px rgba(0, 188, 212, 0.35)"
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#fff" }}>
                    {proj.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#bdbdbd" }}>
                    {proj.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#00bcd4",
                      color: "#000",
                      fontWeight: 600,
                      "&:hover": { backgroundColor: "#00acc1" }
                    }}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
