import React, { Component } from 'react'
import NextEpisodeList from './components/NextEpisodeList'
import 'isomorphic-fetch'
import api from 'graphql-call'
// const watching = ['110381', '280619']
const graphqlEndpoint = 'http://localhost:3080/graphql'
let client = api({url: graphqlEndpoint, headers: {
}})


export default class MyComponent extends Component {
  constructor() {
    super()
    this.state = {
      episodes: []
    }
  }
  componentWillMount() {
    client.query({
      episode: {
        variables: {id: '5739010'},
        result: `
      id
      episodeName
      episodeCode
      released
      series{
        id
        seriesName
        banner
      }
    `
      }
    }).then(result => {
      // console.log('result: ', JSON.stringify(result))
      this.setState({episodes: [result.data.episode]})
    }).catch(error => {
      console.error('error: ', JSON.stringify(error))
    })
  }
  render() {
    console.log('a', this.state.episodes)
    return (
      <div className="App">
        <NextEpisodeList episodes={this.state.episodes} />
      </div>
    )
  }
}
