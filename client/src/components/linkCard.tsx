import { Paper, Typography } from "@mui/material";


export default function linkCard(props: any) {
    return (
        <Paper elevation={2} key={props.linkID} sx={{padding:1}}>
            <Typography>
                <a href={props.link} target="_blank">{props.name}</a>
            </Typography>

            <br></br>

            <Typography>
                Type: {props.type}
            </Typography>
        </Paper>
    );
}