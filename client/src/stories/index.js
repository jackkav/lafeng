import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Button from '../components/Button'
import RadioButton from '../components/RadioButton'
import Welcome from '../components/Welcome'
import NextEpisode from '../components/NextEpisode'
import NextEpisodeList from '../components/NextEpisodeList'

// storiesOf('Welcome', module)
//   .add('to Storybook', () => (
//     <Welcome showApp={linkTo('Button')} />
//   ))

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ))
//   .add('with both', () => (
//     <Button onClick={action('clicked')}>😀 😎cool story</Button>
//   ))

// storiesOf('RadioButton', module)
//   .add('with default props', () => (
//     <RadioButton onChange={action('changed')} />
//   ))
//   .add('with custom options', () => (
//     <RadioButton onChange={action('changed')} options={[{label: 'a', value: 'a'}, {label: 'b', value: 'b'}]} />
//   ))
//   .add('with three options', () => (
//     <RadioButton onChange={action('changed')} options={[{label: 'a', value: 'a'}, {label: 'b', value: 'b'}, {label: 'c', value: 'c'}]} />
//   ))

storiesOf('NextEpisode', module)
  .add('with default props', () => (
    <NextEpisode onClick={action('clicked')}>Game of Thrones</NextEpisode>
  ))
  .add('with custom props', () => (
    <NextEpisode onClick={action('clicked')} name="Hello" number="S02E11">The Expanse</NextEpisode>
  ))


storiesOf('NextEpisodeList', module)
  .add('with default props', () => (
    <NextEpisodeList />
  ))
