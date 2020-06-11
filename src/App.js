import React from 'react'
import './App.css'

import Attributes from './elements/Attributes'

import Section from './elements/Section'

import jamesWest from './data/james-west.json'

const App = () => <>
  <h1>Twilight: 2000 &ndash; Character Record Sheet</h1>
  <Section name="subject_profile" data={jamesWest.subject_profile} />
  <Section name="base_values" data={jamesWest.base_values} />
  <Attributes attributes={jamesWest.attributes_and_skills} />
  <Section name="medical" data={jamesWest.medical} />
  <Section name="inventory_sign-outs" data={jamesWest["inventory_sign-outs"]} />
  <Section name="subject_bio" data={jamesWest.subject_bio} />
  <Section name="brief" data={jamesWest.brief} />
  <Section name="career_history" data={jamesWest.career_history} />
</>

export default App
