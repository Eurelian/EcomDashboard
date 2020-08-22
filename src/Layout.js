import React from "react";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";

import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import AdminPic from "./assets/img/faces/marc.jpg";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import MenuIcon from "@material-ui/icons/Menu";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import DashboardIcon from "@material-ui/icons/Dashboard";
import TimelineIcon from "@material-ui/icons/TimelineRounded";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjectsOutlined";
import LoyaltyIcon from "@material-ui/icons/LoyaltyOutlined";
import StoreIcon from "@material-ui/icons/StoreRounded";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import SupportIcon from "@material-ui/icons/ContactSupportOutlined";
import Slide from "@material-ui/core/Slide";

import Dashboard from "./Dashboard";

const drawerWidth = 240;

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		[theme.breakpoints.down(600)]: {
			background: "rgba(47,51,80,1)",
		},
		background: "none",
		boxShadow: "none",
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: "#3c4858",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
		[theme.breakpoints.down(600)]: {
			color: "#f5f5f5",
		},
		"&:hover": {
			color: "#0694ff",
			background: "none",
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		background:
			"linear-gradient(360deg, rgba(47,51,80,1) 0%, rgba(53,58,93,1) 100%)",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		marginTop: theme.spacing(3),
	},

	menuHover: {
		transition: "all 0.2s ease",
		fontSize: "0.8rem",
		fontWeight: "400",
		marginTop: "5px",
		marginBottom: "5px",
		borderRadius: "6px",
		"&:hover": {
			color: "#f5f5f5",
			background: "#0694ff",
		},
	},

	search: {
		display: "flex",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	iconButton: {
		transition: "all 0.3s ease",
		paddingLeft: "35px",
		color: "#999999",
		[theme.breakpoints.down(600)]: {
			color: "#f5f5f5",
		},
		"&:hover": {
			color: "#0694ff",
			background: "none",
		},
	},

	drawerIcon: { color: "white", transition: "all 0.3s ease" },
	drawerItem: {
		color: "white",
		padding: "10px 15px",
		transition: "all 0.3s ease",
		borderRadius: "12px 12px 12px 12px",
		"&:hover": {
			"& $drawerIcon": {
				color: "#0694ff",
			},
			background: "rgba(47,51,80,1)",

			// "linear-gradient(50deg, rgba(255,106,54,1) 0%, rgba(255,62,122,1) 100%)",
		},
	},

	isSelected: {
		color: "#0694ff",
	},

	drawerSubtitle: {
		color: "white",
		textTransform: "uppercase",
		display: "flex",
		padding: "0 15px",
		fontWeight: "500",
	},

	drawerTitle: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		marginBottom: "50px",
	},
	brand: {
		fontSize: "1.8rem",
		fontWeight: "200",
		color: "white",
		letterSpacing: "1.5rem",
	},
}));

function ResponsiveDrawer(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	// const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleSelect = (id) => {
		return selectedIndex === id;
	};

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	// const handleChange = (event) => {
	// 	setAuth(event.target.checked);
	// };

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					minHeight: "65px",
				}}
			>
				<StoreIcon
					style={{ color: "#f5f5f5", height: "40px", width: "40px" }}
				></StoreIcon>
			</div>
			<div className={classes.drawerTitle}>
				<Typography className={classes.brand}>SENSO</Typography>
			</div>

			<Typography className={classes.drawerSubtitle}>Main</Typography>
			<List>
				{["Dashboard", "Reports", "Insights", "Sales"].map((text, index) => (
					<ListItem
						button
						key={text}
						className={classes.drawerItem}
						selected={selectedIndex === index}
						onClick={(event) => handleListItemClick(event, index)}
					>
						<ListItemIcon
							className={
								handleSelect(index) ? classes.isSelected : classes.drawerIcon
							}
						>
							{index === 0 ? (
								<DashboardIcon />
							) : index === 1 ? (
								<TimelineIcon />
							) : index === 2 ? (
								<EmojiObjectsIcon />
							) : (
								<LoyaltyIcon />
							)}
						</ListItemIcon>
						<Typography
							style={{
								fontSize: "0.9rem",
								fontWeight: "300",
							}}
						>
							{text}
						</Typography>
					</ListItem>
				))}
			</List>

			<Typography
				className={classes.drawerSubtitle}
				style={{ marginTop: "50px" }}
			>
				Help
			</Typography>
			<List>
				{["Settings", "Support"].map((text, index) => (
					<ListItem button key={text} className={classes.drawerItem}>
						<ListItemIcon className={classes.drawerIcon}>
							{index === 0 ? <SettingsIcon /> : <SupportIcon />}
						</ListItemIcon>
						<Typography
							style={{
								fontSize: "0.9rem",
								fontWeight: "300",
							}}
						>
							{text}
						</Typography>
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								width: "100%",
							}}
						>
							<div></div>
							<div style={{ display: "flex" }}>
								<IconButton disableRipple className={classes.iconButton}>
									<SearchIcon />
								</IconButton>
								{/* <div className={classes.search}>
									<InputBase
										placeholder='Search…'
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
										inputProps={{ "aria-label": "search" }}
									/>
								</div> */}

								<IconButton
									aria-label='show 6 new notifications'
									className={classes.iconButton}
								>
									<Badge badgeContent={6} color='secondary'>
										<NotificationsIcon />
									</Badge>
								</IconButton>
								<IconButton
									aria-label='account of current user'
									aria-controls='menu-appbar'
									aria-haspopup='true'
									onClick={handleMenu}
									className={classes.iconButton}
								>
									<Avatar src={AdminPic} />
								</IconButton>
								<Menu
									id='menu-appbar'
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={open}
									onClose={handleClose}
								>
									<MenuItem onClick={handleClose} className={classes.menuHover}>
										Profile
									</MenuItem>
									<MenuItem onClick={handleClose} className={classes.menuHover}>
										My account
									</MenuItem>
									<Divider />
									<MenuItem onClick={handleClose} className={classes.menuHover}>
										Log Out
									</MenuItem>
								</Menu>
							</div>
						</div>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<Dashboard></Dashboard>
			</main>
		</div>
	);
}

export default ResponsiveDrawer;
