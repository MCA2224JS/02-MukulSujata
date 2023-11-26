import React from 'react'
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import {SearchBar, VideoDetails, VideoList} from './components';


class App extends React.Component {
     handeleSubmit = async (searchTerm) =>
    {
        const response = await youtube.get('search',{
            params:{
                part: 'snippet',
                maxResults: 5 ,
                key: 'AIzaSyDUzMXRxM-mW0xDNhHVC49g5yZ6DwjOu7U',
                q: searchTerm,
    
            }
        });
       
 this.setState({videos: response.data.items, selectedVideo: response.data.items[0] });

    }
    render(){
        const { selectedVideo, videos } = this.state;
        return (
            <Grid container spacing = {10}>
                <Grid item xs={12}>
                    <Grid constainer spacing = {10}>
                    <Grid item xs={12}>     
                        {/* Search bar Componet  */}
                        <SearchBar  onFormSubmit={this.handeleSubmit}/> 
                        
                    </Grid>
                    <Grid item xs = {8}>
                        {/* Videos Datails Component */}
                       <VideoDetails  video = {selectedVideo}/>
                    </Grid>
                    <Grid item xs= {4}>
                        {/* Videos List */}
                        <VideoList video={videos} />   
                    </Grid>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default App;
