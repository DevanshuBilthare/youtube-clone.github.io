import React from 'react'

import { Grid } from '@material-ui/core'

import { SearchBar, VideoDetail, VideoList } from './Components'


import youtube from './Api/youtube'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            video: [],
            selectedVideo: null,
        }
    }

    componentDidMount() {
        this.handleSubmit('Devopod')

    }


    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDLlI5yOMRJvb684md3fMg-GjukEufeV-c',
                q: searchTerm
            }
        })

        this.setState({
            video: response.data.items,
            selectedVideo: response.data.items[1]
        })
        // console.log(this.state.video)

    }

    selectVideo = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        const { selectedVideo, video } = this.state

        return (
            <Grid justify="center" container spacing={10} >
                <Grid item xs={12}>
                    <Grid container spacing={10} >
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail videoDetailProp={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videoListProp={video} onVideoSelect={this.selectVideo} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;