import { Grid, Typography } from "@mui/material";

import { homeworks }  from '../data/mock-data';

import HomeworkCard from "./hwCard";

export default function Homework() {
    return (
        <>
            <Typography variant="h6">
                Upcoming Homework
            </Typography>

            <Grid container spacing={2}>
                {homeworks.map((homework) => (
                    <Grid item xs={4}>
                        <HomeworkCard key={homework.homeworkID}
                        dateAssigned={homework.dateAssigned}
                        dateDue={homework.dateDue}
                        name={homework.name}
                        description={homework.description}
                        link={homework.link}
                        />
                    </Grid>

                ))}
            </Grid>

        </>
    );
}