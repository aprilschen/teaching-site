import { Button } from "@mui/material";
import { useState } from "react";

export default function Repl() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
            sx={{my:4}}
            variant="outlined"
            onClick={() => setOpen(!open)}>
                {open == true ? 'Close Repl Embed' : "Open Repl Embed"}
            </Button>

            <section>
                { open == true ?
                <iframe width="1200vw" height="800vh" src="https://replit.com/@schen-academy/VainDazzlingField"></iframe>
                : <></> }
            </section>
        </>
    );
}