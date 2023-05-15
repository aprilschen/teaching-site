import { Box, Divider, Typography } from "@mui/material";

import TuitionDropdown from "./components/TuitionDropdown";

export default function Payments(props: any) {
    const tuitions = props.payments

    function calculateOverdueTuition() {
        let totalOwed = 0;
        tuitions.forEach((session: any) => {
            console.log(session);
            if (!session.fulfilled && (new Date()) > new Date(session.dateDue.substring(0,10))) {
                totalOwed += session.cost;
            }
        })
        return totalOwed;
    }

    function calculateOwedTuition() {
        let totalOwed = 0;
        tuitions.forEach((session: any) => {
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

            <TuitionDropdown theme={props.theme}
            payments={props.payments}/>
        </Box>
    );
}