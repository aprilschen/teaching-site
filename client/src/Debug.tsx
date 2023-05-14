import { Paper, Typography } from "@mui/material";
import axios from 'axios'
import { stringify } from "querystring";
import { useEffect, useState } from "react";

export default function Debug() {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("https://0l3iu0rscb.execute-api.us-west-1.amazonaws.com/dev/student/1")
        .then(res => stringify(res.data))
        .then(data => setUser(data))
    }, [])

    return (
        <>
        <Paper sx={{mx:3, p:2}}>
            <Typography>Debugging Page</Typography>
            <Typography>The number below is passed in from the express server:</Typography>
            <Typography>{user}</Typography>
        </Paper>
        </>
    );
}