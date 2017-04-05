import React from 'react'
import NextEpisode from './NextEpisode'

const NextEpisodeList = ({ episodes }) => (
  <div>
    {episodes.map(episode => (
      <NextEpisode
        key={episode.episodeCode}
        image={`http://thetvdb.com/banners/_cache/${episode.series.banner}`}
        name={episode.episodeName}
        number={episode.episodeCode}
        release={episode.released}>
        {episode.series.seriesName}
      </NextEpisode>))}
  </div>
)
NextEpisodeList.defaultProps = {
  episodes: [{episodeName: 'Here There Be Dragons', episodeCode: 'S02E11', series: 'The Expanse', release: 'Today'}, {episodeName: 'Here There Be More Dragons', episodeCode: 'S02E12', series: 'The Expanse', release: 'Next week'}]
}
NextEpisodeList.propTypes = {
  children: React.PropTypes.string,
  episodes: React.PropTypes.array,
  onClick: React.PropTypes.func
}

export default NextEpisodeList
