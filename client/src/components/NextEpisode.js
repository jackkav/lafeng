import React from 'react'
import styled from 'styled-components'



const NextEpisode = ({ children, onClick, releaseDate, episodeName, episodeNumber }) => (
  <Container>
    <Image />
    <TextContainer>
      <InnerTextContainer>
        <EpisodeNumber>{episodeNumber}</EpisodeNumber>
        <ReleaseDay>{releaseDate}</ReleaseDay>
      </InnerTextContainer>
      <SeriesName>{children}</SeriesName>
      <EpisodeName>{episodeName}</EpisodeName>
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
  onClick: React.PropTypes.func
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flexDirection: row;
  height: 150px;
  justify-content: center;
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
