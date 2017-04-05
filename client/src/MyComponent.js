import React, { Component } from 'react'
import NextEpisodeList from './components/NextEpisodeList'
// const watching = ['110381', '280619']
const episodes = [
  {
    'id': '5280275',
    'episodeName': 'Remember the Cant',
    'director': 'Jeff Woolnough',
    'overview': 'While Avasarala plays a dangerous game of politics, Holden and his crew are forced to turn on one another while held captive by the Martian Navy.',
    'airedEpisodeNumber': 3,
    'airedSeason': 1,
    'episodeCode': 'S01E03',
    'released': 'a year ago',
    'banner': 'http://thetvdb.com/banners/_cache/graphical/280619-g8.jpg'
  },
  {
    'id': '5280276',
    'episodeName': 'CQB',
    'director': 'Jeff Woolnough',
    'overview': 'Holden and crew are caught in the middle of a desperate battle as mysterious war ships attack and board the Donnager. As Miller continues to investigate Julie Mao, his partner Havelock continues to go missing.',
    'airedEpisodeNumber': 4,
    'airedSeason': 1,
    'episodeCode': 'S01E04',
    'banner': 'http://thetvdb.com/banners/_cache/graphical/280619-g8.jpg',
    'released': 'a year ago'
  },
  {
    'id': '5739010',
    'episodeName': 'Caliban\'s War',
    'director': '',
    'overview': 'The Roci crew must fight to save the ship.',
    'airedEpisodeNumber': 13,
    'airedSeason': 2,
    'episodeCode': 'S02E13',
    'banner': 'http://thetvdb.com/banners/_cache/graphical/280619-g8.jpg',
    'released': 'in 13 days'
  }
]
export default class MyComponent extends Component {
  render() {
    return (
      <div className="App">
        <NextEpisodeList episodes={episodes} />
      </div>
    )
  }
}
