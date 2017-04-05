import React from 'react'
import NextEpisode from '../src/components/NextEpisode'
import renderer from 'react-test-renderer'

it('renders correctly without any props', () => {
  const tree = renderer.create(
    <NextEpisode />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
