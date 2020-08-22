import React from "react";

// react plugin for creating charts
import ChartistGraph from "react-chartist";
import "chartist/dist/chartist.css";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

//icons
import Store from "@material-ui/icons/Store";
import TrendingUp from "@material-ui/icons/TrendingUpOutlined";
import DateRange from "@material-ui/icons/DateRange";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/AccessibilityOutlined";
import AutoRenew from "@material-ui/icons/AutorenewOutlined";
import EuroSymbol from "@material-ui/icons/EuroSymbol";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
import EmojiEvents from "@material-ui/icons/EmojiEventsOutlined";

//components
import GridContainer from "./components/Grid/GridContainer";
import GridItem from "./components/Grid/GridItem";
import Card from "./components/Card/Card";
import CardHeader from "./components/Card/CardHeader";
import CardIcon from "./components/Card/CardIcon";
import CardFooter from "./components/Card/CardFooter";
import CardBody from "./components/Card/CardBody";
import CardContent from "@material-ui/core/CardContent";
import TopTable from "./components/Table/table";

//charts
import {
	dailySalesChart,
	emailsSubscriptionChart,
	completedTasksChart,
} from "./variables/charts";

//styles
import styles from "./assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

const Dashboard = () => {
	//CHART

	const classes = useStyles();
	return (
		<div styles={{ width: "100%" }}>
			<GridContainer>
				<GridItem xs={12}>
					<Typography noWrap className={classes.sectionTitle}>
						Dashboard
					</Typography>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color='warning' stats icon>
							<CardIcon
								color='warning'
								style={{
									background:
										"linear-gradient(50deg, rgba(255,106,54,1) 0%, rgba(255,169,60,1) 100%)",
								}}
							>
								<Store />
							</CardIcon>
							<p className={classes.cardCategory}>Revenue</p>
							<h3 className={classes.cardTitle}>$ 6000</h3>
						</CardHeader>
						<CardFooter stats>
							<div className={classes.stats}>
								<DateRange />
								Last 24 Hours
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color='success' stats icon>
							<CardIcon
								color='success'
								style={{
									background:
										"linear-gradient(50deg, rgba(76,167,80,1) 0%, rgba(55,255,93,1) 100%)",
								}}
							>
								<TrendingUp />
							</CardIcon>
							<p className={classes.cardCategory}>Gross Profit Margin</p>
							<h3 className={classes.cardTitle}>24%</h3>
						</CardHeader>
						<CardFooter stats>
							<div className={classes.stats}>
								<DateRange />
								Current Month
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color='info' stats icon>
							<CardIcon
								color='info'
								style={{
									background:
										"linear-gradient(50deg, rgba(23,188,208,1) 0%, rgba(55,244,255,1) 100%)",
								}}
							>
								<Accessibility />
							</CardIcon>
							<p className={classes.cardCategory}>Visitors</p>
							<h3 className={classes.cardTitle}>234</h3>
						</CardHeader>
						<CardFooter stats>
							<div className={classes.stats}>
								<DateRange />
								Last 24 Hours
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color='danger' stats icon>
							<CardIcon
								color='danger'
								style={{
									background:
										"linear-gradient(50deg, rgba(233,67,63,1) 0%, rgba(254,123,90,1) 100%)",
								}}
							>
								<AutoRenew />
							</CardIcon>
							<p className={classes.cardCategory}>Conversion Rate</p>
							<h3 className={classes.cardTitle}>8.6%</h3>
						</CardHeader>
						<CardFooter stats>
							<div className={classes.stats}>
								<DateRange />
								Last 24 Hours
							</div>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
			<GridContainer>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart>
						<CardHeader
							color='success'
							style={{
								background:
									"linear-gradient(50deg, rgba(255,106,54,1) 0%, rgba(255,62,122,1) 100%)",
							}}
						>
							<ChartistGraph
								className='ct-chart'
								data={dailySalesChart.data}
								type='Line'
								options={dailySalesChart.options}
								listener={dailySalesChart.animation}
							/>
						</CardHeader>
						<CardBody>
							<h4 className={classes.cardTitle}>Daily Sales</h4>
							<p className={classes.cardCategory}>
								<span className={classes.successText}>
									<ArrowUpward className={classes.upArrowCardCategory} /> 55%
								</span>{" "}
								increase in today sales.
							</p>
						</CardBody>
						<CardFooter chart>
							<div className={classes.stats}>
								<AccessTime /> updated 4 minutes ago
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart>
						<CardHeader
							color='success'
							style={{
								background:
									"linear-gradient(50deg, rgba(255,106,54,1) 0%, rgba(255,62,122,1) 100%)",
							}}
						>
							<ChartistGraph
								className='ct-chart'
								data={emailsSubscriptionChart.data}
								type='Bar'
								options={emailsSubscriptionChart.options}
								responsiveOptions={emailsSubscriptionChart.responsiveOptions}
								listener={emailsSubscriptionChart.animation}
							/>
						</CardHeader>
						<CardBody>
							<h4 className={classes.cardTitle}>Email Subscriptions</h4>
							<p className={classes.cardCategory}>Last Campaign Performance</p>
						</CardBody>
						<CardFooter chart>
							<div className={classes.stats}>
								<AccessTime /> campaign sent 2 days ago
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart>
						<CardHeader
							color='danger'
							style={{
								background:
									"linear-gradient(50deg, rgba(255,106,54,1) 0%, rgba(255,62,122,1) 100%)",
							}}
						>
							<ChartistGraph
								className='ct-chart'
								data={completedTasksChart.data}
								type='Line'
								options={completedTasksChart.options}
								listener={completedTasksChart.animation}
							/>
						</CardHeader>
						<CardBody>
							<h4 className={classes.cardTitle}>Bounce Rate</h4>
							<p className={classes.cardCategory}>
								<span className={classes.successText}>
									<ArrowUpward className={classes.upArrowCardCategory} /> 25%
								</span>{" "}
								increase
							</p>
						</CardBody>
						<CardFooter chart>
							<div className={classes.stats}>
								<AccessTime /> Last Day
							</div>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
			<GridContainer>
				<GridItem xs={12} lg={6}>
					<Card>
						<CardHeader color='success' stats icon>
							<CardIcon
								color='success'
								style={{
									background:
										"linear-gradient(50deg, rgba(76,167,80,1) 0%, rgba(55,255,93,1) 100%)",
								}}
							>
								<EmojiEvents />
							</CardIcon>

							<h4 className={classes.cardTitle} style={{ paddingTop: "15px" }}>
								Top Products
							</h4>
						</CardHeader>
						<CardContent>
							<TopTable></TopTable>
						</CardContent>
					</Card>
				</GridItem>
				<GridItem xs={12} lg={6}>
					<GridContainer>
						<GridItem xs={12} sm={6} md={6}>
							<Card>
								<CardHeader color='success' stats icon>
									<CardIcon
										color='success'
										style={{
											background:
												"linear-gradient(50deg, rgba(76,167,80,1) 0%, rgba(55,255,93,1) 100%)",
										}}
									>
										<EuroSymbol />
									</CardIcon>
									<p className={classes.cardCategory}>Avg. Order Value</p>
									<h3 className={classes.cardTitle}>$ 130</h3>
								</CardHeader>
								<CardFooter stats>
									<div className={classes.stats}>
										<DateRange />
										Last 24 Hours
									</div>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={6}>
							<Card>
								<CardHeader color='info' stats icon>
									<CardIcon
										color='info'
										style={{
											background:
												"linear-gradient(50deg, rgba(23,188,208,1) 0%, rgba(55,244,255,1) 100%)",
										}}
									>
										<AddShoppingCart />
									</CardIcon>
									<p className={classes.cardCategory}>Avg. Cart Size</p>
									<h3 className={classes.cardTitle}>3</h3>
								</CardHeader>
								<CardFooter stats>
									<div className={classes.stats}>
										<DateRange />
										Last 24 Hours
									</div>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12}>
							<Card>
								<CardHeader color='danger' stats icon>
									<CardIcon
										color='danger'
										style={{
											background:
												"linear-gradient(50deg, rgba(233,67,63,1) 0%, rgba(254,123,90,1) 100%)",
										}}
									>
										<RemoveShoppingCart />
									</CardIcon>
									<p className={classes.cardCategory}>Abandoned Cart Rate</p>
									<h3 className={classes.cardTitle}>34.5%</h3>
								</CardHeader>
								<CardFooter stats>
									<div className={classes.stats}>
										<DateRange />
										Last 24 Hours
									</div>
								</CardFooter>
							</Card>
						</GridItem>
					</GridContainer>
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default Dashboard;
