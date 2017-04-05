import React from 'react'
import RadioButton from '../src/components/RadioButton'
import renderer from 'react-test-renderer'

it('renders correctly without any props', () => {
  const tree = renderer.create(
    <RadioButton />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with two options', () => {
  const input = [{label: 'a', value: 'a'}, {label: 'b', value: 'b'}]
  const tree = renderer.create(
    <RadioButton options={input} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
