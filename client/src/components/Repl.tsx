import { Button } from "@mui/material";
import { useState } from "react";

export default function Repl() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
            variant="outlined"
            onClick={() => setOpen(!open)}>
                {open == true ? 'Close Repl' : "Open Repl"}
            </Button>

            <section>
                { open == true ?
                <iframe width="1200vw" height="800vh" src="https://replit.com/@schen-academy/VainDazzlingField"></iframe>
                : <></> }
            </section>
        </>
    );
}