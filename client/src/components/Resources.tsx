import { useState, useEffect } from "react";
import { IconButtonProps, Grid, IconButton, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import LinkCard from "./linkCard";

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
    const [links, setLinks] = useState<any>(null);

    useEffect(() => {
    if(localStorage.getItem('studentPortalToken') == null) {
        console.log('You need to login!')
    }
    else {
      // @ts-ignore
      const [header, payload, signature] = localStorage.getItem('studentPortalToken').split('.');
      const decodedPayload = JSON.parse(atob(payload));
      axios.get(`https://0l3iu0rscb.execute-api.us-west-1.amazonaws.com/dev/link?studentID=${decodedPayload.studentID}`)
      .then(res => res.data)
      .then(res => setLinks(res));
    }
    },[]);

    if(!links) {
        return (<></>);
    }

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
                {links.map((link:any) => (
                    <Grid item xs={3}>
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