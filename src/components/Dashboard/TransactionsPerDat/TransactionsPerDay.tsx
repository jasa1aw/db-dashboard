'use client'

import DataChart from "@/components/DataChart/DataChart";
import { Card, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import { lineChartData } from "@/components/mockData";

export type TransactionCardType = {
    title: string,
    value: string,
    changeValue: string
}

export default function TransactionsPerDay(){

    return (
        <Grid container gap={2} className="wrapper">
            <Paper className="transactions" sx={{backgroundColor:"#1A2027"}}>
                <div className="chart">
                    <Typography>Transactions per day</Typography>
                    <DataChart type={'line'} data={lineChartData}/>
                </div>
                <div className="cardWrapper">
                    <Card className="card" variant={'outlined'}>
                        <div className="cardTitle">
                            <Typography>Total Products</Typography>
                        </div>
                        <div className="cardValue">
                            <Typography>1.275</Typography>
                            <Typography fontSize={14} color='#008000 !important'>428.7%</Typography>
                        </div>
                    </Card>
                    <Card className="card" variant={'outlined'}>
                        <div className="cardTitle">
                            <Typography>Buy-to-detail</Typography>
                        </div>
                        <div className="cardValue">
                            <Typography>4.40%</Typography>
                            <Typography fontSize={14} color='#008000 !important'>428.7%</Typography>
                        </div>
                    </Card>
                    <Card className="card" variant={'outlined'}>
                        <div className="cardTitle">
                            <Typography>Refunds</Typography>
                        </div>
                        <div className="cardValue">
                            <Typography>0</Typography>
                            <Typography fontSize={14} color='#008000 !important'>0</Typography>
                        </div>
                    </Card>
                </div>
            </Paper>
        </Grid>
    );
};