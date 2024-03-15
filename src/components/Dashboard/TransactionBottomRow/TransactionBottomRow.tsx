"use client";

import DataChart from "@/components/DataChart/DataChart";
import { Grid, Paper } from "@mui/material";
import { doughnutChartData } from "@/components/mockData";

export default function TransactionBottomRow() {
	return (
		<Grid container className='bottomRow'>
			<Grid>
				<Paper className='cardData'>
					<p>Transactions per user type</p>
					<DataChart type={"doughnut"} data={doughnutChartData} />
				</Paper>
			</Grid>
			<Grid>
				<Paper className='cardData'>
					<p>Transactions per user type</p>
					<DataChart type={"doughnut"} data={doughnutChartData} />
				</Paper>
			</Grid>
			<Grid>
				<Paper className='cardData'>
					<p>Transactions per user type</p>
					<DataChart type={"doughnut"} data={doughnutChartData} />
				</Paper>
			</Grid>
			<Grid>
				<Paper className='cardData'>
					<p>Transactions per user type</p>
					<DataChart type={"doughnut"} data={doughnutChartData} />
				</Paper>
			</Grid>
		</Grid>
	);
}
