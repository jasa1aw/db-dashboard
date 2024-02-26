'use client'
import { CSSObject } from "@mui/system";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Person2Icon from "@mui/icons-material/Person2";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Settings } from "@mui/icons-material";
import Link from "next/link";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Theme,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { signOut } from "next-auth/react";

const drawerWidth = 215;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouteList = ["analytics", "profile", "settings", ""];
const menuListTranslations = ["Analytics", "Profile", "Settings", "Sign Out"];
const menuListIcons = [
  <EqualizerIcon key={1}/>,
  <Person2Icon key={2}/>,
  <Settings key={3}/>,
  <ExitToAppIcon key={4}/>,
];

export default function SideMenu(){
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const handleDrawerToggle = () => {
    setOpen(!open)
  };

  const handleListItemButtonClick = (text: string) => {
    text === "Sign Out" ? signOut() : null;
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" anchor="left" open={open} className='slideMenu' 
        sx={{
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: {
                backgroundColor: '#121212',
                color: '#fff',
                left: 0,
                top: mobileCheck ? 64 : 57,
                flexShrink: 0,
                whiteSpace: "nowrap",
                boxSizing: "border-box",
                ...(open && {
                    ...openedMixin(theme),
                    "& .MuiDrawer-paper": openedMixin(theme),
                }),
                ...(!open && {
                ...closedMixin(theme),
                "& .MuiDrawer-paper": closedMixin(theme),
                }),
            },
        }}
    > 
        <div className='drawHeader'>
            <IconButton  onClick={handleDrawerToggle} sx={{color:'#fff'}}>
                {open ? (
                    <ChevronRightIcon />
                ) : (
                    <ChevronLeftIcon />
                )}
            </IconButton>
        </div>
        <Divider />
        <Divider />
        <List>
            {menuListTranslations.map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                    <Link  href={`/dashboard/${menuRouteList[index]}`}>
                        <ListItemButton
                            onClick={() => handleListItemButtonClick(text)}
                            title={text}
                            aria-label={text}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5, 
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                    color: '#fff'
                                }}
                            >
                                {menuListIcons[index]}
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                sx={{
                                    color: '#fff',
                                    opacity: open ? 1 : 0
                                }}
                            />
                            {" "}
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </List>
    </Drawer>
  );
};