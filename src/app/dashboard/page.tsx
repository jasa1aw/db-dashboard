'use client';

import { Box, Grid, Paper } from "@mui/material";

export default function Dashboard(){
    return(
        <Box>
            <Grid container gap={2} className="topCardsContainer">
                <Grid>
                    <Paper className="dataCard">xs=4</Paper>
                </Grid>
                <Grid>
                    <Paper className="dataCard">xs=4</Paper>
                </Grid>
                <Grid>
                    <Paper className="dataCard">xs=4</Paper>
                </Grid>
            </Grid>
            <Grid xs={12} marginY={2}>
                <Paper className="dataCard">xs=8</Paper>
            </Grid>
        </Box>
    )
}