import React from 'react';
import { Button, FormGroup } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar({ video, state }) {

    const SetUnderline = (val) => {
        return video===val ? "outlined" : "text";
    }

    return (
        <div>
            <FormGroup row>
                <Button variant={SetUnderline(0)}>
                    <Link to='/tutorial'
                        state={state}>Tutorial</Link>
                </Button>
                <Button variant={SetUnderline(1)}>
                    <Link to='/video1'
                        state={state}>Video 1</Link>
                </Button>
                <Button variant={SetUnderline(2)}>
                    <Link to='/video2'
                        state={state}>Video 2</Link>
                </Button>
                <Button variant={SetUnderline(3)}>
                    <Link to='/video3'
                        state={state}>Video 3</Link>
                </Button>
                <Button variant={SetUnderline(4)}>
                    <Link to='/video4'
                        state={state}>Video 4</Link>
                </Button>
                <Button variant={SetUnderline(5)}>
                    <Link to='/video5'
                        state={state}>Video 5</Link>
                </Button>
                <Button variant={SetUnderline(6)}>
                    <Link to='/video6'
                        state={state}>Video 6</Link>
                </Button>
                </FormGroup>
        </div>
    );
}

export default NavBar;