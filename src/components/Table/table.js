import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

const useRowStyles = makeStyles({
	root: {
		"& > *": {
			borderBottom: "unset",
		},
	},
});

function createData(id, name, sales, revenue) {
	return {
		id,
		name,
		sales,
		revenue,
		history: [
			{ date: "2020-01-05", customerId: "11091700", amount: 3 },
			{ date: "2020-01-02", customerId: "Anonymous", amount: 1 },
		],
	};
}

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();
	const styles = useStyles();

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton
						aria-label='expand row'
						style={{ color: "#0694ff" }}
						size='small'
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component='th' scope='row' className={styles.cardTitle}>
					{row.id}
				</TableCell>
				<TableCell align='center' className={styles.cardTitle}>
					{row.name}
				</TableCell>
				<TableCell align='center' className={styles.cardTitle}>
					{row.sales}
				</TableCell>
				<TableCell align='center' className={styles.cardTitle}>
					{row.revenue}
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box margin={1}>
							<Typography
								variant='h6'
								gutterBottom
								component='div'
								className={styles.cardTitle}
							>
								History
							</Typography>
							<Table size='small' aria-label='purchases'>
								<TableHead>
									<TableRow>
										<TableCell className={styles.cardTitle}>Date</TableCell>
										<TableCell className={styles.cardTitle}>Customer</TableCell>
										<TableCell className={styles.cardTitle}>Amount</TableCell>
										<TableCell className={styles.cardTitle}>
											Total price ($)
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.date}>
											<TableCell
												component='th'
												scope='row'
												className={styles.cardTitle}
											>
												{historyRow.date}
											</TableCell>
											<TableCell className={styles.cardTitle}>
												{historyRow.customerId}
											</TableCell>
											<TableCell align='center' className={styles.cardTitle}>
												{historyRow.amount}
											</TableCell>
											<TableCell align='center' className={styles.cardTitle}>
												{Math.round(historyRow.amount * 110 * 100) / 100}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

// Row.propTypes = {
// 	row: PropTypes.shape({
// 		calories: PropTypes.number.isRequired,
// 		carbs: PropTypes.number.isRequired,
// 		fat: PropTypes.number.isRequired,
// 		history: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				amount: PropTypes.number.isRequired,
// 				customerId: PropTypes.string.isRequired,
// 				date: PropTypes.string.isRequired,
// 			})
// 		).isRequired,
// 		name: PropTypes.string.isRequired,
// 		price: PropTypes.number.isRequired,
// 		protein: PropTypes.number.isRequired,
// 	}).isRequired,
// };

const rows = [
	createData(36273, "Jo Malone London", 36, "$ 1040"),
	createData(26273, "Zarko Perfume", 24, "$ 830"),
	createData(26273, "CK One", 20, "$ 789"),
];

export default function TopTable() {
	return (
		<TableContainer component={Paper}>
			<Table aria-label='collapsible table'>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell align='left'>Product ID</TableCell>
						<TableCell align='center'>Name</TableCell>
						<TableCell align='center'>Sales</TableCell>
						<TableCell align='center'>Revenue</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<Row key={row.name} row={row} align='center' />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
