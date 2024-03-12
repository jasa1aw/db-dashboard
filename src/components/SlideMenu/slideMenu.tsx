"use client";
// import { SlideMenu } from '@/components/SlideMenu/slideMenu';

export default function SlideMenu(){
// const openedMixin = (theme: Theme): CSSObject => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
//   });
  
//   const closedMixin = (theme: Theme): CSSObject => ({
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//       width: `calc(${theme.spacing(8)} + 1px)`,
//     },
//   });
  
//   const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//   }));

// export default function SlideMenu() {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);
//     const handleDrawerOpen = () => {
//       setOpen(true);
//     };
  
//     const handleDrawerClose = () => {
//       setOpen(false);
//     };
    return (
        <ul>
            <li>Analytics</li>
            <li>Profile</li>
            <li>Settings</li>
        </ul>
    );
}
