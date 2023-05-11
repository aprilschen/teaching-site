import { Box, Divider, Typography } from "@mui/material";

import { tuitions } from "./data/mock-data";
import TuitionDropdown from "./components/TuitionDropdown";

export default function Payments(props: any) {

    function calculateOverdueTuition() {
        let totalOwed = 0;
        tuitions.forEach(session => {
            if ((new Date()) > session.dateDue) {
                totalOwed += session.cost;
            }
        })
        return totalOwed;
    }

    function calculateOwedTuition() {
        let totalOwed = 0;
        tuitions.forEach(session => {
            if (!session.fulfilled) {
                totalOwed += session.cost;
            }
        })
        return totalOwed;
    }

    return (
        <Box sx={{mx: 5}}>
            <Typography variant="h4"
            sx={(props.theme.palette.mode == 'dark' ?
            {color: '#FFFFFF', mb:1}:{mb:1})}>
                Payments History
            </Typography>

            <Divider sx={{mb:3}}/>

            <Typography variant="h5" 
            sx={(props.theme.palette.mode == 'dark' ?
            {color: '#FFFFFF', mb:2}:{mb:2})}>
                Overdue: ${calculateOverdueTuition()}
            </Typography>

            <Typography variant="h5" 
            sx={(props.theme.palette.mode == 'dark' ?
            {color: '#FFFFFF', mb:2}:{mb:2})}>
                Unpaid: ${calculateOwedTuition()}
            </Typography>
            <Divider/>

            <TuitionDropdown theme={props.theme}/>
        </Box>
    );
}