import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./loading.css"

function Loading() {
    return ( 
        <div className="LoadingCont">
            <Box sx={{ display: 'flex'}} >
                <CircularProgress />
            </Box>
        </div>
     );
}

export default Loading;