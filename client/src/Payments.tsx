import { Box, Divider, Grid, Paper, Typography } from "@mui/material";

import { tuitions } from "./data/mock-data";
import TuitionDropdown from "./components/TuitionDropdown";

export default function Payments(props: any) {

    function calculateOwedTuition() {
        let totalOwed = 0;
        tuitions.forEach(session => {
            if ((new Date()) > session.dateDue) {
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
                Total Owed: ${calculateOwedTuition()}
            </Typography>

            <Divider/>

            <TuitionDropdown/>

            <Grid container spacing={2}>
                {tuitions.map((tuition) => (
                    <Grid item xs={3}>
                        <Paper sx={{p:2}}>
                            <Typography>
                                ID: {tuition.tuitionID}
                            </Typography>
                            <Typography>
                                Class Date: {tuition.classTime.toLocaleDateString('en-US')}
                            </Typography>
                            <Typography>
                                Cost: {tuition.cost}
                            </Typography>
                            <Typography>
                                Date Due: {tuition.dateDue.toLocaleDateString('en-US').toString()}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}