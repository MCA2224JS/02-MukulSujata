import React from 'react'
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  const ListOfVideos = videos.map((video) =><VideoItem />)
  return ListOfVideos;
}

export default VideoList