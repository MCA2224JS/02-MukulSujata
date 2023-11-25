import React from 'react'
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import {SearchBar, VideoDetails} from './components';


class App extends React.Component {
    render(){
        return (
            <Grid container spacing = {16}>
                <Grid item xs={12}>
                    <Grid constainer spacing = {16}>
                    <Grid item xs={12}>     
                        {/* Search bar Componet  */}
                        <SearchBar /> 
                        
                    </Grid>
                    <Grid item xs = {8}>
                        {/* Videos Datails Component */}
                       <VideoDetails />
                    </Grid>
                    <Grid item xs= {4}>
                        {/* Videos List */}
                    </Grid>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default App;