import { Button, Paper, CardActions, CardContent, Link, Typography } from "@mui/material";
import { useState } from "react";
import Confetti from 'react-confetti'
import OverdueAlert from "./OverdueAlert";

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
                <Typography fontSize={20}>
                    <Link href={props.link} target="_blank">
                        {props.name}
                    </Link>
                </Typography>
                <Typography fontSize={15}>{props.description}</Typography>
                <br></br>

                <Typography fontSize={15}>Date Assigned: {props.dateAssigned.substring(0,10)}</Typography>
                <Typography fontSize={15}>Date Due: {props.dateDue.substring(0,10)}</Typography>
            </CardContent>
            <CardActions>
                {isComplete ? (
                    new Date(props.dateDue) > (new Date()) ? 
                        <Button sx={{ml:1}} variant={"contained"}color={"warning"} onClick={handleChange}>
                        Incomplete
                        </Button> : 
                        <>
                            <Button variant={"contained"}color={"error"} onClick={handleChange}
                            sx={{mx:1}}>
                                Overdue
                            </Button>
                            <OverdueAlert/>
                        </>
                    ) : (
                    <Button sx={{ml:1}}variant={"contained"}color={"success"} onClick={handleChange}>
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