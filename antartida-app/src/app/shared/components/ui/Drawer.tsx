import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Avatar,
	Icon,
	ListItemIcon,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import classNames from "classnames";
// import useFetchApi from "@app/shared/hooks/useFetchApi";
// import { IPersonal } from "@app/models/sgrh/IPersonal";
// import { usuarioSGRHSliceRequests } from "@app/Middleware/reducers/UsuarioSGRHSlice";
// import { GetInfoUser } from "@app/shared/helpers/userConfig";
// import { IAppUser } from "@app/models/IAppUser";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import { authenticationSlice } from "@app/Middleware/reducers/AuthenticationSlice";
// import { useAppDispatch, useAppSelector } from "@app/Middleware/store/store";
// import { ThemeToggle } from "../themeToggle";
import { Navigate } from "react-router";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
	list: {
		width: 350,
		textColor: "gray",
	},
	fullList: {
		width: "auto",
	},
	paper: {
		background:
			"linear-gradient(45deg, rgba(220,15,77,0.8) 00%, rgba(155, 7, 45,0.6)  50%, rgba(220,15,77,0.8) 100%),",
		// +
		// `url(${Images})`,
		backgroundSize: "cover",
		backgroundPositionX: "center",
		//color: theme.palette.primary.main
	},
	root: {
		"& NoSsr SwipeArea": {
			width: 0,
		},
	},
	accordion: {
		padding: 0,
		boxShadow: "none",
		background: "transparent",
		border: 0,
		"& .Mui-expanded": {
			minHeight: "auto",
		},
	},
	summaryaccordion: {
		padding: 0,
		minHeight: "auto",
		flexDirection: "row-reverse",
		"& .MuiAccordionSummary-content": {
			margin: 0,
		},
		"& .MuiAccordionSummary-expandIcon": {
			color: "white",
		},
	},
	small: {
		width: "100%",
		height: "auto",
	},
	contentaccordion: {
		padding: "0 0 0 24px",
		minHeight: "auto",
		flexDirection: "column",
		"& .MuiAccordionSummary-content": {
			margin: 0,
		},
	},
	listItem: {
		margin: 0,
		padding: 0,
	},
}));

export const Drawer = (): JSX.Element => {
	const classes = useStyles();
	// const dispatch = useAppDispatch();
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	// const { State: InfoUsuario } = useFetchApi<IPersonal>(
	// 	usuarioSGRHSliceRequests.LoginUser,
	// 	GetInfoUser().dni || 0
	// );
	// const AppUserInfo: IAppUser = useAppSelector(
	// 	(state) => state.appUser.data as any
	// );
	// const handleLogOut = () => {
	// 	dispatch(authenticationSlice.actions.ForceLogOut());
	// };

	const hitoryPush = (page: string) => {
		<Navigate to={page} />;
		setIsOpen(false);
	};

	return (
		<div>
			<IconButton
				edge="start"
				color="inherit"
				aria-label="Menu"
				onClick={() => {
					setIsOpen(true);
				}}
				size="large"
			>
				<MenuIcon />
			</IconButton>
			<SwipeableDrawer
				anchor="left"
				open={isOpen}
				SwipeAreaProps={{ width: 0 }}
				onClose={() => {
					setIsOpen(false);
				}}
				onOpen={() => {
					setIsOpen(true);
				}}
				classes={{ paper: classes.paper, root: classes.root }}
			>
				<div className={classes.list}>
					{/* <Box
						className="text-2xl font-sans px-4 py-2"
						textAlign="center"
					>
						<div className="grid grid-cols-5">
							<Avatar
								alt={InfoUsuario?.nombre}
								className={classNames(
									classes.small,
									"col-span-1 w-full"
								)}
								src={
									InfoUsuario?.image?.image_profile &&
									`https://sgrh.newsan.com.ar/assets/imgProFile/${InfoUsuario?.image?.image_profile}`
								}
							/>
							<div className="col-span-4 ml-4 text-gray-50 text-sm font-medium text-left">
								<div>
									{InfoUsuario?.nombre +
										" " +
										InfoUsuario?.apellido}
								</div>
								<div>{AppUserInfo?.permisos?.rol?.name}</div>
								<div>{AppUserInfo?.permisos?.subrol?.name}</div>
							</div>
						</div>
					</Box> */}
					<div className="flex md:hidden justify-around items-center ">
						{/* <ThemeToggle /> */}
					</div>
					<Divider />
					<Accordion className={classes.accordion}>
						<AccordionSummary
							className={classes.summaryaccordion}
							expandIcon={
								<ExpandMoreIcon className="text-gray-50" />
							}
						>
							<ListItem button>
								<ListItemIcon>
									<Icon
										className="text-gray-50 text-center"
										style={{ fontSize: "1.75rem" }}
									>
										<img
											className="h-full"
											src={`${process.env.PUBLIC_URL}/icons/auditIcon.svg`}
											style={{ filter: "invert(1)" }}
										/>
									</Icon>
								</ListItemIcon>
								<ListItemText
									className="text-gray-50"
									primary={"Auditorías"}
								/>
							</ListItem>
						</AccordionSummary>
						<AccordionDetails className={classes.contentaccordion}>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush(
											"/main/auditoria/table-of-audits"
										);
									}}
								>
									<ListItemText
										primary={"Creación/Edición Auditorías"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush("/main/auditoria/todo");
									}}
								>
									<ListItemText
										primary={"Tareas"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush(
											"/main/auditoria/tabla-de-auditorias-terminadas"
										);
									}}
								>
									<ListItemText
										primary={"Auditorías realizadas"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush(
											"/main/auditoria/auditorias-para-realizar"
										);
									}}
								>
									<ListItemText
										primary={"Realizar auditorías del dia"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
						</AccordionDetails>
					</Accordion>

					<Accordion className={classes.accordion}>
						<AccordionSummary
							className={classes.summaryaccordion}
							expandIcon={
								<ExpandMoreIcon className="text-gray-50" />
							}
						>
							<ListItem button>
								<ListItemIcon>
									<Icon
										className="text-gray-50 text-center"
										style={{ fontSize: "1.75rem" }}
									>
										<img
											className="h-full"
											src={`${process.env.PUBLIC_URL}/icons/productionIcon.svg`}
											style={{ filter: "invert(1)" }}
										/>
									</Icon>
								</ListItemIcon>
								<ListItemText
									className="text-gray-50"
									primary={"Producción"}
								/>
							</ListItem>
						</AccordionSummary>
						<AccordionDetails className={classes.contentaccordion}>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush("/main/produccion/prod");
									}}
								>
									<ListItemText
										primary={"Información Producción"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush("/main/produccion/traza");
									}}
								>
									<ListItemText
										primary={"Administrar Trazabilidad"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush(
											"/main/mes/production-orders"
										);
									}}
								>
									<ListItemText
										primary={"Ordenes de producción"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion className={classes.accordion}>
						<AccordionSummary
							className={classes.summaryaccordion}
							expandIcon={
								<ExpandMoreIcon className="text-gray-50" />
							}
						>
							<ListItem button>
								<ListItemIcon>
									<Icon
										className="text-gray-50 text-center"
										style={{ fontSize: "1.75rem" }}
									>
										<img
											className="h-full"
											src={`${process.env.PUBLIC_URL}/icons/calidad.svg`}
											style={{ filter: "invert(1)" }}
										/>
									</Icon>
								</ListItemIcon>
								<ListItemText
									className="text-gray-50"
									primary={"Calidad"}
								/>
							</ListItem>
						</AccordionSummary>
						<AccordionDetails className={classes.contentaccordion}>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush("/main/calidad/calidad");
									}}
								>
									<ListItemText
										primary={"Carga de rechazos"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush(
											"/main/calidad/no-conformes"
										);
									}}
								>
									<ListItemText
										primary={"Consulta de no conformes"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion className={classes.accordion}>
						<AccordionSummary
							className={classes.summaryaccordion}
							expandIcon={
								<ExpandMoreIcon className="text-gray-50" />
							}
						>
							<ListItem button>
								<ListItemIcon>
									<Icon
										className="text-gray-50 text-center"
										style={{ fontSize: "1.75rem" }}
									>
										<img
											className="h-full"
											src={`${process.env.PUBLIC_URL}/icons/battery.svg`}
											style={{ filter: "invert(1)" }}
										/>
									</Icon>
								</ListItemIcon>
								<ListItemText
									className="text-gray-50"
									primary={"Baterías"}
								/>
							</ListItem>
						</AccordionSummary>
						<AccordionDetails className={classes.contentaccordion}>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush("/main/baterias/CRUD");
									}}
								>
									<ListItemText
										primary={"Carga de baterías"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
							<div className="flex items-center">
								<ChevronRightIcon className="text-gray-50" />
								<ListItem
									button
									onClick={() => {
										hitoryPush("/main/baterias/view");
									}}
								>
									<ListItemText
										primary={"Vista de baterías"}
										className="text-gray-50"
									/>
								</ListItem>
							</div>
						</AccordionDetails>
					</Accordion>
					<ListItem
						button
						onClick={() => {
							// handleLogOut();
							console.log("logout");
						}}
					>
						<ListItemIcon>
							<ExitToAppIcon className="text-gray-50" />
						</ListItemIcon>
						<ListItemText primary={"Salir"} />
					</ListItem>
				</div>
			</SwipeableDrawer>
		</div>
	);
};
