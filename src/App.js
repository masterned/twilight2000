import React from 'react'
import './App.css'

import Attributes from './elements/Attributes'

import Section from './elements/Section'

import jamesWest from './data/james-west.json'

const {
  username,
  subject_profile,
  base_values,
  attributes,
  medical,
  inventory_signOuts,
  subject_bio,
  brief,
  career_history
} = jamesWest

const App = () => <main>
  <h1>Twilight: 2000 &ndash; Character Record Sheet</h1>
  <Section name="subject_profile" data={subject_profile} />
  <Section name="base_values" data={base_values} />
  <Attributes user={username} data={attributes} />
  <Section name="medical" data={medical} />
  <Section name="inventory_sign-outs" data={inventory_signOuts} />
  <Section name="subject_bio" data={subject_bio} />
  <Section name="brief" data={brief} />
  <Section name="career_history" data={career_history} />
</main>

export default App
