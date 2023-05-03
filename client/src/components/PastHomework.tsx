import { Grid, Typography, IconButtonProps, IconButton } from "@mui/material";

import { pastHomeworks }  from '../data/mock-data';

import HomeworkCard from "./hwCard";

import { useState } from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function PastHomework(props: any) {
    const [expanded, setExpanded] = useState(true);
    const handleExpandClick = () => {setExpanded(!expanded)};

    return (
        <>
            <Typography variant="h5" 
            sx={(props.theme.palette.mode == 'dark' ?
            {color: '#FFFFFF', my:2}:{my:2})}>
                Past Assignments
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </Typography>



            {expanded == true ? (<></>): (<Grid container spacing={2}>
                {pastHomeworks.map((homework) => (
                    <Grid item xs={4}>
                        <HomeworkCard key={homework.homeworkID}
                        dateAssigned={homework.dateAssigned}
                        dateDue={homework.dateDue}
                        name={homework.name}
                        description={homework.description}
                        link={homework.link}
                        isComplete={homework.isComplete}
                        />
                    </Grid>

                ))}
            </Grid>)}
        </>
    );
}