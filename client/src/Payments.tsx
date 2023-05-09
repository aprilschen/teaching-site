import { Box, Divider, Grid, Paper, Typography } from "@mui/material";

import { tuitions } from "./data/mock-data";

export default function Payments(props: any) {
    return (
        <Box sx={{mx: 5}}>
            <Typography variant="h4"
            sx={(props.theme.palette.mode == 'dark' ?
            {color: '#FFFFFF', mb:1}:{mb:1})}>
                Payments History
            </Typography>

            <Divider sx={{mb:3}}/>

            <Grid container spacing={2}>
                {tuitions.map((tuition) => (
                    <Grid item xs={3}>
                        <Paper sx={{p:2}}>
                            {tuition.tuitionID}
                            {tuition.classTime}
                            {tuition.classTime}
                            {tuition.cost}
                            {tuition.dateDue.toString()}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}