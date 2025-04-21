import React from 'react';
import { Box, Typography } from '@mui/material';

const skillData = [
  {
    title: 'Networking',
    items: ['TCP/IP', 'OSI Model', 'Ports & Protocols', 'DNS', 'HTTP', 'SSH'],
  },
  {
    title: 'Operating Systems',
    items: ['Windows (Event Viewer, Registry)', 'Linux (Logs, Commands)'],
  },
  {
    title: 'Security Concepts',
    items: ['CIA Triad', 'Threats', 'Vulnerabilities', 'Malware Types', 'Cyber Kill Chain'],
  },
  {
    title: 'SIEM Tools',
    items: ['Splunk', 'QRadar', 'ELK', 'Microsoft Sentinel (Log Analysis, Alert Triage)'],
  },
  {
    title: 'Log Analysis',
    items: ['Firewall', 'Web Server', 'Endpoint', 'System Logs'],
  },
  {
    title: 'Incident Response',
    items: ['Triage', 'Containment', 'Documentation', 'Recovery'],
  },
  {
    title: 'Threat Intelligence',
    items: ['IOCs', 'MITRE ATT&CK', 'Threat Actor Behavior'],
  },
  {
    title: 'Packet Analysis',
    items: ['Wireshark', 'PCAP Files'],
  },
  {
    title: 'Endpoint Detection',
    items: ['EDR Tools (CrowdStrike, SentinelOne)'],
  },
  {
    title: 'Scripting Basics',
    items: ['Python', 'Bash (Automate Log Parsing & Alerts)'],
  },
  {
    title: 'Security Tools',
    items: ['Snort', 'Suricata', 'Nessus', 'VirusTotal', 'pfSense'],
  },
  {
    title: 'Soft Skills',
    items: ['Communication', 'Critical Thinking', 'Report Writing', 'Teamwork'],
  },
  {
    title: 'Certs',
    items: ['Security+', 'Google Cybersecurity Professional Certificate' ],
  },
];

const SkillsSection = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#121212', color: '#f5f5f5', textAlign: 'center' }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: '2rem',
          color: '#00bcd4',
          marginBottom: 3,
          position: 'relative',
          display: 'inline-block',
        }}
      >
        Skills & Knowledge Areas
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

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        {skillData.map((section, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: '#e0e0e0',
              fontFamily: 'Poppins, sans-serif',
              maxWidth: '800px',
            }}
          >
            <span style={{ color: '#00bcd4', fontWeight: 600 }}>{section.title}:</span>{' '}
            {section.items.join(', ')}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;

