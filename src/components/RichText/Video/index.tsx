import React from 'react'

import classes from './index.module.scss'
import { VimeoPlayer } from './Vimeo/index.js'
import { YouTubePlayer } from './YouTube/index.js'

export const Video: React.FC<{
  id?: string
  platform?: 'vimeo' | 'youtube'
  start?: number
}> = (props) => {
  const { id, platform = 'vimeo', start } = props

  return (
    <div
      className={classes.videoPlayer}
      style={{
        paddingTop: '56.25%',
      }}
    >
      {platform === 'youtube' && <YouTubePlayer start={start} videoID={id} />}
      {platform === 'vimeo' && <VimeoPlayer videoID={id} />}
    </div>
  )
}
