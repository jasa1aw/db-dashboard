'use client';

import { Paper, IconButton } from "@mui/material";
import Typography from '@mui/material/Typography';
import Tooltip from "@mui/material/Tooltip";
import { InfoOutlined } from "@mui/icons-material";

export type DataCardProps={
    title: string;
    value: string;
    description: string;}

export default function DataCard(props: DataCardProps){
    const {title, value, description} = props;
    return (
        <Paper className="cardData">
            <div className="cardHeader">
                <Typography fontSize={'h6'} color={'lightslategray'}>{title}</Typography>
                <Tooltip
                    title={
                        <Typography fontSize={16}>{`${description} which is ${value}`}</Typography>  
                    }                  
                >
                    <IconButton>
                        <InfoOutlined/>
                    </IconButton>
                </Tooltip>
            </div>
            <Typography fontSize={18} color={'#fff'}>{value}</Typography>
        </Paper>
    );
};