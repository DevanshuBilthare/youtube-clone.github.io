import React from 'react'

import { Paper, Typography } from '@material-ui/core'

const VideoDetail = (props) => {
    if (!props.videoDetailProp) return <div>Loading...</div>
    const Videosrc = `https://www.youtube.com/embed/${props.videoDetailProp.id.videoId}`
    console.log(props.videoDetailProp)
    return (
        <div style={{ height: '100vh' }}>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="10" title="Video Player" style={{ height: "100%", width: "100%" }} src={Videosrc}></iframe>
            </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography varient="h4" style={{ fontSize: "30px" }}>{props.videoDetailProp.snippet.title} - {props.videoDetailProp.snippet.channelTitle}</Typography>
                <Typography varient="subtitle1" style={{ fontSize: "20px" }} > {props.videoDetailProp.snippet.channelTitle}</Typography>
                <Typography varient="subtitle2">{props.videoDetailProp.snippet.description}</Typography>
            </Paper>
        </div>
    )
}


export default VideoDetail;


