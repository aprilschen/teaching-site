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
                <iframe width={'100%'} height={'800px'} src="https://replit.com/@schen-academy/VainDazzlingField"></iframe>
                : <></> }
            </section>
        </>
    );
}