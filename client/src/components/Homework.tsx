import { Grid, Typography, IconButtonProps, IconButton } from "@mui/material";

import { homeworks }  from '../data/mock-data';

import HomeworkCard from "./hwCard";

import { useState } from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

export default function Homework() {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {setExpanded(!expanded)};

    return (
        <>
            <Typography variant="h5" sx={{my:2}}>
                Upcoming Homework
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
                {homeworks.map((homework) => (
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