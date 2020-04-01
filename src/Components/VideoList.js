import React from 'react'

import VideoItem from './VideoItem'

import { Grid } from '@material-ui/core'

function VideoList({ videoListProp, onVideoSelect }) {
    // console.log(videos)
    const listOfVideos = videoListProp.map((video, id) => <VideoItem key={id} videoDisplay={video} onVideoSelect={onVideoSelect} />)

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}


export default VideoList;