import React from 'react'
import NextEpisode from './NextEpisode'

const NextEpisodeList = ({ episodes }) => (
  <div>
    {episodes.map(episode => (
      <NextEpisode
        key={episode.name}
        name={episode.name}
        number={episode.number}
        release={episode.release}>
        {episode.series}
      </NextEpisode>))}
  </div>
)
NextEpisodeList.defaultProps = {
  episodes: [{name: 'Here There Be Dragons', number: 'S02E11', series: 'The Expanse', release: 'Today'}, {name: 'Here There Be More Dragons', number: 'S02E12', series: 'The Expanse', release: 'Next week'}]
}
NextEpisodeList.propTypes = {
  children: React.PropTypes.string.isRequired,
  episodes: React.PropTypes.array,
  onClick: React.PropTypes.func
}

export default NextEpisodeList
