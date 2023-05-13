import { Paper, Typography } from "@mui/material";
import axios from 'axios'
import { stringify } from "querystring";
import { useEffect, useState } from "react";

export default function Debug() {
    const [user, setUser] = useState("");
    useEffect(() => {
        axios.get("https://tlixtrcr2c.execute-api.us-west-1.amazonaws.com/server/user/2")
        .then(res => stringify(res.data))
        .then(data => setUser(data))
    }, [])

    return (
        <>
        <Paper>
            <Typography>Debugging Page</Typography>
            <Typography>The number below is passed in from the express server</Typography>
            <Typography>{user}</Typography>
        </Paper>
        </>
    );
}