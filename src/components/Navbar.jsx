import React, { useState } from 'react'
import { Menu, MenuItem, AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import Pet from '@mui/icons-material/Pets';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({theme}) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

const Icons = styled(Box)(({theme}) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display: 'flex'
  },
}))

const UserBox = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display: 'none'
  },
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography 
          variant='h6'
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            }
          }}
        >
          L.V.N
        </Typography>
        <Pet
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            }
          }}
        />
        <Search>
          <InputBase placeholder='Поиск...'/>
        </Search>
        <Icons>
          <Badge badgeContent={5} color='error'>
            <Mail/>
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications/>
          </Badge>
          <Avatar 
            sx={{
              width: 30,
              height: 30,
            }}
            src='https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-9-940x940.png'
            onClick = {(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick = {(e) => setOpen(true)}>
        <Avatar 
          sx={{
            width: 30,
            height: 30,
          }}
          src='https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-9-940x940.png'
          />
          <Typography variant='span'>
            Вася
          </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id = "demo-positioned-menu"
        aria-labelledby = "demo-positioned-button"
        open = {open}
        onClose = {(e) => setOpen(false)}
        anchorOrigin = {{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin = {{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar