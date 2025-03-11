import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Box } from "@mui/material";
import { Menu, Dashboard, Settings } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleDrawer } from "../redux/drawerSlice";

const drawerWidth = 240;

const StudioLayout: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Top Bar */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => dispatch(toggleDrawer())}>
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Studio
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Navigation Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={isOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: isOpen ? `${drawerWidth}px` : 0 }}>
        <Toolbar />
        <Typography variant="h4">Studio Page</Typography>
      </Box>
    </Box>
  );
};

export default StudioLayout;
