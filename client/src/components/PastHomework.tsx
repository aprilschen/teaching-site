import { Grid, Typography, IconButtonProps, IconButton } from "@mui/material";
import HomeworkCard from "./hwCard";

import { useState, useEffect } from "react";
import axios from "axios";

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

    const [pastHomeworks, setPastHomeworks] = useState<any>(null);

    useEffect(() => {
      axios.get("https://0l3iu0rscb.execute-api.us-west-1.amazonaws.com/dev/homework/?studentID=1&isLegacy=true")
      .then(res => res.data)
      .then(res => setPastHomeworks(res));
    },[]);

    if(!pastHomeworks) {
        return (<></>);
    }

    return (
        <>
            <Typography variant="h5"
            sx={(props.theme.palette.mode == 'dark' ?
            {color: '#FFFFFF', py:2}:{py:2})}>
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

            {expanded == true ? (<></>): (
            <Grid container spacing={2}>
                {pastHomeworks.map((homework: any) => (
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