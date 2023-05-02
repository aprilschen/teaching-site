import { Button, Paper, CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import Confetti from 'react-confetti'


export default function HomeworkCard(props: any) {
    const [isComplete, setIsComplete] = useState(props.isComplete);
    const [confetti, setConfetti] = useState(false);

    function handleChange() {
        setIsComplete(!isComplete);
        if(isComplete == true) {
            setConfetti(true)
        }
    }

    return (
        <Paper elevation={2} sx={{mb:4}} key={props.homeworkID}>
            <CardContent>
                <Typography>{props.dateAssigned}</Typography>
                <Typography>{props.dateDue}</Typography>
                <Typography>{props.name}</Typography>
                <Typography>{props.description}</Typography>
                <Typography>{props.link}</Typography>
            </CardContent>
            <CardActions>
                {isComplete ? (
                    <Button variant={"contained"}color={"warning"} onClick={handleChange}>
                        Incomplete
                    </Button>) : (
                    <Button variant={"contained"}color={"success"} onClick={handleChange}>
                        Complete
                    </Button>
                    )
                }
            </CardActions>
            {confetti == true ? (
            <Confetti
            numberOfPieces={300}
            recycle={false}
            onConfettiComplete={() => {setConfetti(!confetti)}}
            />) : (
                <></>
            )}
        </Paper>
    );
}