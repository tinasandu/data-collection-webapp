import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { CircularProgress, Stack, Box, Button } from "@mui/material"


function ConditionalLink({ children, to, passState }) {
    const [links, setLinks] = useState(0);
    const [go, setGo] = useState(true);

    if ((to)) {
        if (links === undefined || links === 0) {
            const pass = passState.password
            console.log(go);
            axios.get('https://ayj8v6xmp0.execute-api.us-east-1.amazonaws.com/prod/form',
                {
                    headers: {
                        'content-type': 'application/json',
                        'pass': pass
                    }
                })
                .then(res => {
                    setLinks(res.data.links);
                    if (res.data.statusCode === 200) {
                        setGo(false);
                    }
                })
        }

        if (go) {
            return (
                <Box sx={{ p: 1, border: 1, borderColor: 'secondary.main', borderRadius: '4%' }}>
                    <Stack spacing={2} direction="row" alignContent="center">
                        <CircularProgress />
                        <Button label="Retrieving the videos" variant="text">Retrieving Videos</Button>
                    </Stack>
                </Box>
            );
        } else {
            return (
                <Box sx={{ p: 1, border: 1, borderColor: 'secondary.main', borderRadius: '4%' }}>
                    <Link to={to}
                        style={{"font-size":25}}
                        state={{
                            observerName: passState.observerName,
                            information: passState.information,
                            links: links
                        }}
                    >{children}</Link>
                </Box>
            );
        }

    }
}
export default ConditionalLink;