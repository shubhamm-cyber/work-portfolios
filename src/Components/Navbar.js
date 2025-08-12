import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ refs }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [active, setActive] = useState('Home');

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const scrollToSection = (ref, section) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 60, // offset for navbar height
        behavior: 'smooth',
      });
    }
    setActive(section);
    handleMenuClose();
  };

  const menuItems = [
    { label: 'Home', ref: refs.heroRef },
    { label: 'Profile', ref: refs.profileRef },
    { label: 'Certifications', ref: refs.compTIARef },
    { label: 'Skills', ref: refs.skillRef },
    { label: 'Portfolio', ref: refs.portfolioRef },
    { label: 'Contact', ref: refs.footerRef }, // new contact item
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(13, 13, 13, 0.85)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Logo or Name */}
        <Box sx={{ fontWeight: 'bold', fontFamily: 'Poppins', fontSize: '1.2rem', color: '#00bcd4' }}>
          Shubham Ahirrao
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => scrollToSection(item.ref, item.label)}
                sx={{
                  fontFamily: 'Poppins',
                  color: active === item.label ? '#00bcd4' : '#fff',
                  position: 'relative',
                  mx: 1,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: active === item.label ? '100%' : '0',
                    height: '2px',
                    backgroundColor: '#00bcd4',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover:after': {
                    width: '100%',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Dropdown */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              onClick={() => scrollToSection(item.ref, item.label)}
              sx={{ fontFamily: 'Poppins' }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


