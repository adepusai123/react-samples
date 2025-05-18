// import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Layout = () => (
  <>
    <AppBar position="absolute">
      <Toolbar variant="regular" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
            React Sample
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/admin">Admin</Button>
        </Box>
      </Toolbar>
    </AppBar>
    <main style={{ padding: '2rem' }}>
      <Outlet />
    </main>
  </>
)

export default Layout;