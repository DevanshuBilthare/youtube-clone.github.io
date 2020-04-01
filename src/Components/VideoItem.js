import React from "react"

import { Grid, Paper, Typography } from "@material-ui/core"


function VideoItem({ videoDisplay, onVideoSelect }) {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(videoDisplay)} >
                <img style={{ marginRight: '20px', width: '50%' }} alt="thumbnail" src={videoDisplay.snippet.thumbnails.medium.url} />
                <Typography style={{ fontSize: "15px" }}><b>{videoDisplay.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;