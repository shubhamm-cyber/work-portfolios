
import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Link } from '@mui/material';
import wireshark from '../assets/images/Wireshark.png'; // Adjust path based on your folder structure
import conti from '../assets/images/Conti.png';
import fakegpt from '../assets/images/Fakegpt.png';
import incidentresponse from '../assets/images/Incidentresponse.png';
import poisned from '../assets/images/Poisned.png';
import soar from '../assets/images/Soar.png';
import tusk from '../assets/images/Tuskmalwareanalysis.png';
import multi from '../assets/images/multistage.png';
import soar2 from '../assets/images/Splunk_Alert.png'



const projects = [
   {
    title: 'Hands-On SOC Workflow: Detect, Investigate, Automate',
    description: 'Built a full SOC workflow detecting suspicious PowerShell activity using Splunk, automated alerting via Tines, and real-time Slack notifications. Expanded detections through manual hunting and visualized attacker activity with a professional Splunk dashboard mapped to MITRE ATT&CK.',
    image: soar2,
    url: 'https://shubhamahirrao.notion.site/Hands-On-SOC-Workflow-Detect-Investigate-Automate-1dc2e78c860a8071b899dde507ec9b41?pvs=74',
  },
  {
    title: 'SOAR EDR Project: Integrating LimaCharlie, Tines, Slack, and Email for Enhanced Cybersecurity',
    description: 'This project leverages LimaCharlie, Tines, Slack, and Email to automatically detect Suspicious Utility, notify relevant personnel, and manage machine isolation decisions, streamlining incident response and enhancing threat mitigation.',
    image: soar,
    url: 'https://shubhamahirrao.notion.site/SOAR-EDR-Project-Integrating-LimaCharlie-Tines-Slack-and-Email-for-Enhanced-Cybersecurity-e50e45293739466d8f4cc45bfb837827',
  },
  {
    title: 'Conti Ransomware Incident Analysis Using Splunk',
    description: 'This project utilized Splunk to analyze security logs, detect indicators of Conti ransomware activity, and track network anomalies. By correlating data from various sources, it streamlined the identification and mitigation of the threat, enhancing overall cybersecurity defenses.',
    image: conti,
    url: 'https://shubhamahirrao.notion.site/Conti-Ransomware-Incident-Analysis-Using-Splunk-66331583f134432f8512fc3cc38f68b8',
  },
  {
    title: 'Malware Analysis using Wireshark',
    description: 'Used Wireshark to capture and analyze network traffic, identify malicious activity, and trace malware behavior for effective threat mitigation.',
    image: wireshark,
    url: 'https://shubhamahirrao.notion.site/Malware-Analysis-using-Wireshark-5eaa7b64c38e4cac980db13a887563ea',
  },
  {
    title: 'Incident Response Plan (IRP) for TechGuard Solutions',
    description: 'TechGuard Solutions IRP details steps for managing cybersecurity incidents, including team roles, classification, and response phases to ensure quick recovery and continuous improvement.',
    image: incidentresponse,
    url: 'https://shubhamahirrao.notion.site/Incident-Response-Plan-IRP-for-TechGuard-Solutions-3979771afbf444c19b09cb5afe16d87f?pvs=25',
  },
  {
    title: 'Threat Analysis of a Malicious ChatGPT Browser Extension',
    description: 'This project focuses on investigating a phishing-based threat campaign involving a fake ChatGPT-like platform called FakeGPT. It demonstrates how attackers use social engineering and clone sites to lure users into providing sensitive information or downloading malicious payloads.',
    image: fakegpt,
    url: 'https://shubhamahirrao.notion.site/Threat-Analysis-of-a-Malicious-ChatGPT-Browser-Extension-1832e78c860a805a80bae43220bf4bc4',
  },
  {
    title: 'Network Traffic Analysis Credential Theft Investigation',
    description: "The objective of this network traffic analysis is to investigate a potential credential theft incident by examining network logs and captured traffic to identify the mistyped query that initiated the attack, the rogue machine's IP address, all affected machines, the compromised account's username, and the hostname of the machine accessed by the attacker, thereby determining the full scope and nature of the network compromise.",
    image: poisned,
    url: 'https://shubhamahirrao.notion.site/Network-Traffic-Analysis-Credential-Theft-Investigation-1892e78c860a801e86a3ea23c8b6b27f',
  },
  {
    title: 'Malware Analysis Report – Tusk Campaign',
    description: "The goal of this project is to investigate a malware campaign known as Tusk. By analyzing a malicious file, I was able to identify important details like the malware's size, where it was hosted, the IP addresses of its command-and-control (C2) servers, and even the cryptocurrency wallet used by the attacker.",
    image: tusk,
    url: 'https://shubhamahirrao.notion.site/Malware-Analysis-Report-Tusk-Campaign-1962e78c860a8067afaaecf829d6c5d9',
  },
  {
    title: 'Case Study – Multi-Stage Intrusion Investigation',
    description: 'This investigation focused on detecting and mitigating suspicious activity observed during after-hours. The objective was to determine if the event was malicious, analyze how the intrusion occurred, and implement containment and remediation with minimal disruption to business operations.',
    image: multi,
    url: 'https://shubhamahirrao.notion.site/Case-Study-Multi-Stage-Intrusion-Investigation-1da2e78c860a8086a762dc343b2a1a0d',
  },
  // Add more projects as needed
];

const CybersecurityPortfolioSection = () => {
  return (
    <Box sx={{ padding: 4, background: 'linear-gradient(135deg, #000000, #434343)', mt: 4, marginBottom: '4rem' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            mb: 5,
            fontSize: '2rem',
            color: '#00bcd4',
            position: 'relative',
            display: 'inline-block',
          }}
        >
          Portfolio
          <Box
            sx={{
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '110%',
              height: '2px',
              bgcolor: '#00bcd4',
            }}
          />
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link href={project.url} underline="none" target="_blank" rel="noopener">
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#1e1e1e',
                  color: '#f5f5f5',
                  borderRadius: 12,
                  boxShadow: 6,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: 12,
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <Box sx={{ height: 250, overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'ficoverll',
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: 1,
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '1.2rem',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CybersecurityPortfolioSection;
