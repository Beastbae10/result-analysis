import * as React from 'react';
import { Box, IconButton, Typography, useTheme, Avatar, Divider, Tooltip, MenuItem, Menu } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Block } from "@mui/icons-material";
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  //profile
  const [anchorEl, setAnchorEl] = React.useState(() => null) ;
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box height="5px"  > 
    
    <Box display="flex" justifyContent="space-between" p={2}  >
      
      
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        
      >
       
      </Box>

      {/* ICONS */}
      <Box display="flex">
      <Tooltip title="search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        </Tooltip>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <Tooltip title="Notifications">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        </Tooltip>
        <Box>
        <Tooltip title="Profile">
        <IconButton
         onClick={handleClick}
         aria-controls={open ? 'account-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
          >
          <PersonOutlinedIcon />
        </IconButton>
        </Tooltip>
        </Box>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
         <Divider />
         <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </Box>
    </Box>
    </Box>
  );
};

export default Topbar;
