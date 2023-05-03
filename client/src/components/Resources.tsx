import { useState } from "react";
import { IconButtonProps, Grid, IconButton, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import LinkCard from "./linkCard";

import { links }  from '../data/mock-data';


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

export default function Resources(props: any) {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {setExpanded(!expanded)};
    return (
        <>
            <Typography variant={'h5'}
            sx={(props.theme.palette.mode == 'dark' ? {color: '#FFFFFF', my:3}:{my:3})}>
                Resources
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
            <Grid container spacing={2} sx={{mb: 5}}>
                {links.map(link => (
                    <Grid item xs={4}>
                        <LinkCard
                        key={link.linkID}
                        name={link.name}
                        studentID={link.studentID}
                        link={link.link}  // this has to be bad style right
                        type={link.type}
                        />
                    </Grid>
                ))}
            </Grid>)}
        </>
    );
}