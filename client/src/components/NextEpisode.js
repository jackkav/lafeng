import React from 'react'
import styled from 'styled-components'

const NextEpisode = ({ children, onClick, release, name, number }) => (
  <Container onClick={onClick}>
    <Image />
    <TextContainer>
      <FlexRow>
        <EpisodeNumber>{number}</EpisodeNumber>
        <ReleaseDay>{release}</ReleaseDay>
      </FlexRow>
      <SeriesName>{children}</SeriesName>
      <EpisodeName>{name}</EpisodeName>
    </TextContainer>
  </Container>
)

NextEpisode.defaultProps = {
  children: 'Game of Thrones',
  release: 'Today',
  number: 'S01E01',
  name: 'Name'
}
NextEpisode.propTypes = {
  children: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  number: React.PropTypes.string,
  onClick: React.PropTypes.func,
  release: React.PropTypes.string
}
const FlexRow = styled.div`
  display: flex;
  flexDirection: row;
  flex: 1;
`
const FlexColumn = styled.div`
  display: flex;
  flexDirection: column;
  flex: 1;
`
const Container = styled(FlexRow)`
  height: 150px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`
const Image = styled.div`
  flex: 1;
  background-color: powderblue;
`
const TextContainer = styled(FlexColumn)`
  flex: 4;
  background-color: grey;
  font-family: Helvetica, Arial, sans-serif;
`
const CenteredText = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: darkgreen;
`
const EpisodeNumber = styled(CenteredText)`
  flex: 3;
  background-color: yellow;
`
const ReleaseDay = styled(CenteredText)`
  background-color: orange;
`
const SeriesName = styled(CenteredText)`
  background-color: purple;
`
const EpisodeName = styled(CenteredText)`
  background-color: lightgreen;
`


export default NextEpisode
