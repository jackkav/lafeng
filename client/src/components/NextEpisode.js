import React from 'react'
import styled from 'styled-components'

const NextEpisode = ({ children, onClick, release, name, number }) => (
  <Container onClick={onClick}>
    <Image />
    <TextContainer>
      <InnerTextContainer>
        <EpisodeNumber>{number}</EpisodeNumber>
        <ReleaseDay>{release}</ReleaseDay>
      </InnerTextContainer>
      <SeriesName>{children}</SeriesName>
      <EpisodeName>{name}</EpisodeName>
    </TextContainer>
  </Container>
)

NextEpisode.defaultProps = {
  children: 'Game of Thrones',
  releaseDate: 'Today',
  episodeNumber: 'S01E01',
  episodeName: 'Name'
}
NextEpisode.propTypes = {
  children: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  number: React.PropTypes.string,
  onClick: React.PropTypes.func,
  release: React.PropTypes.string
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flexDirection: row;
  height: 150px;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`
const Image = styled.div`
  flex: 1;
  background-color: powderblue;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  background-color: grey;
  font-family: Helvetica, Arial, sans-serif;
`
const InnerTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`
const EpisodeNumber = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  background-color: yellow;
`
const EpisodeName = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: lightgreen;
`
const ReleaseDay = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: orange;
  justify-content: center;
`
const SeriesName = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: darkgreen;
`

export default NextEpisode
