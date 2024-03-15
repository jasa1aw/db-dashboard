'use client';

import DataRibbon from "@/components/Dashboard/DataRibbon/dataRibbon";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow/TransactionBottomRow";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDat/TransactionsPerDay";
import { Box, Grid } from "@mui/material";

export default function Dashboard(){
    return(
        <Box>
            <Grid container gap={4} marginTop={2}>
                <DataRibbon/>
                <TransactionsPerDay/>
            </Grid>
            <TransactionBottomRow/>
        </Box>
    )
}