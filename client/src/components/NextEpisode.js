import React from 'react'

const container = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  height: 150
}
const image = {
  flex: 1,
  backgroundColor: 'powderblue'
}
const textContainer = {
  display: 'flex',
  flexDirection: 'column',
  flex: 4,
  backgroundColor: 'grey'
}
const innerTextContainer = {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'pink'
}
const episodeNumber = {
  flex: 3,
  backgroundColor: 'yellow'
}
const releaseDay = {
  flex: 1,
  backgroundColor: 'orange'
}
const seriesName = {
  flex: 1,
  backgroundColor: 'darkgreen'
}
const episodeName = {
  flex: 1,
  backgroundColor: 'lightgreen'
}


const NextEpisode = ({ children, onClick, releaseDate }) => (
  <div style={container}>
    <div style={image} />
    <div style={textContainer}>
      <div style={innerTextContainer}>
        <div style={episodeNumber} />
        <div style={releaseDay}>{releaseDate}</div>
      </div>
      <div style={seriesName} >{children}</div>
      <div style={episodeName} />
    </div>
  </div>
)
NextEpisode.defaultProps = {
  children: 'Game of Thrones',
  releaseDate: 'Today'
}
NextEpisode.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
}

export default NextEpisode
