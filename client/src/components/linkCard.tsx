import { Link, Paper, Typography } from "@mui/material";


export default function linkCard(props: any) {
    return (
        <Paper elevation={2} key={props.linkID} sx={{padding:1}}>
            <Typography sx={{mb:1}}>
                <Link href={props.link} target="_blank">{props.name}</Link>
            </Typography>

            <Typography>
                Type: {props.type}
            </Typography>
        </Paper>
    );
}