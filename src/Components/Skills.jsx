import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import SecurityIcon from "@mui/icons-material/Security";
import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";

const SectionWrapper = styled(Box)(({ theme }) => ({
  background: "linear-gradient(180deg, #0b0b0b 0%, #101820 100%)",
  color: "#fff",
  padding: theme.spacing(10, 0),
}));

const skillsData = [
  {
    title: "Networking",
    icon: <LanguageIcon sx={{ fontSize: 40, color: "#00bcd4" }} />,
    skills: ["TCP/IP", "OSI Model", "Ports & Protocols", "DNS", "HTTP", "SSH"],
  },
  // {
  //   title: "Operating Systems",
  //   icon: <ComputerIcon sx={{ fontSize: 40, color: "#00bcd4" }} />,
  //   skills: [
  //     "Windows (Event Viewer, Registry)",
  //     "Linux (Logs, Commands)",
  //   ],
  // },
  // {
  //   title: "Security Concepts",
  //   icon: <SecurityIcon sx={{ fontSize: 40, color: "#00bcd4" }} />,
  //   skills: [
  //     "CIA Triad",
  //     "Threats & Vulnerabilities",
  //     "Malware Types",
  //     "Cyber Kill Chain",
  //   ],
  // },
  {
    title: "SIEM Tools",
    icon: <StorageIcon sx={{ fontSize: 40, color: "#00bcd4" }} />,
    skills: ["Splunk", "QRadar", "ELK", "Microsoft Sentinel"],
  },
  {
    title: "Incident Response",
    icon: <BugReportIcon sx={{ fontSize: 40, color: "#00bcd4" }} />,
    skills: [
      "Triage",
      "Containment",
      "Documentation",
      "Recovery",
      "Log Analysis",
    ],
  },
  {
    title: "Technical Tools & Scripting",
    icon: <CodeIcon sx={{ fontSize: 40, color: "#00bcd4" }} />,
    skills: [
      "Wireshark",
      "EDR Tools (CrowdStrike, Defender)",
      "Python",
      "Bash",
      "Snort",
      "Suricata",
      "Nessus",
      "VirusTotal",
      "pfSense",
    ],
  },
  {
    title: "Soft Skills",
    icon: <SecurityIcon sx={{ fontSize: 40, color: "#00bcd4" }} />,
    skills: [
      "Communication",
      "Critical Thinking",
      "Report Writing",
      "Teamwork",
    ],
  },
  {
    title: "Certifications",
    icon: <SecurityIcon sx={{ fontSize: 40, color: "#00bcd4" }} />,
    skills: [
      "CompTIA Security+",
      "Google Cybersecurity Professional Certificate",
    ],
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            textAlign: "center",
            color: "#00bcd4",
          }}
        >
          Skills
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#bdbdbd",
            textAlign: "center",
            mb: 6,
          }}
        >
          A diverse skill set covering cybersecurity, networking, tools, and soft skills
        </Typography>

        <Grid container spacing={4}>
          {skillsData.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  bgcolor: "#1c1c1c",
                  borderRadius: "16px",
                  height: "100%",
                  boxShadow: "0 0 20px rgba(0, 188, 212, 0.15)",
                  "&:hover": {
                    boxShadow: "0 0 30px rgba(0, 188, 212, 0.3)",
                    transform: "translateY(-5px)",
                    transition: "0.3s",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ textAlign: "center", mb: 2 }}>{category.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#fff", textAlign: "center", mb: 2 }}
                  >
                    {category.title}
                  </Typography>
                  <ul style={{ color: "#bdbdbd", paddingLeft: "20px", margin: 0 }}>
                    {category.skills.map((skill, i) => (
                      <li key={i} style={{ marginBottom: "6px" }}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}


