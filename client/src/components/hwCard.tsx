import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export default function HomeworkCard(props: any) {
    return (
        <Card sx={{mb:4}}>
            <CardContent>
                <Typography>{props.dateAssigned}</Typography>
                <Typography>{props.dateDue}</Typography>
                <Typography>{props.name}</Typography>
                <Typography>{props.description}</Typography>
                <Typography>{props.link}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Mark Complete</Button>
            </CardActions>
        </Card>
    );
}