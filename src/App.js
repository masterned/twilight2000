import React from 'react'
import './App.css'

import Attributes from './elements/Attributes'
import Medical from './elements/Medical'

import Section from './elements/Section'

import jamesWest from './data/james-west.json'

const {
  username,
  profile,
  base_values,
  attributes,
  medical
} = jamesWest

const App = () => <main>
  <h1>Twilight: 2000 &ndash; Character Record Sheet</h1>
  <Section name="subject profile" data={profile} />
  <Section name="base values" data={base_values} />
  <Attributes user={username} data={attributes} />
  <Medical data={medical} />
</main>

export default App
