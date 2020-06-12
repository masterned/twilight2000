import React from 'react'

const Skill = ({ stat, data, key }) => {
  const { name, level } = data
  const hasLevel = level !== null && level !== undefined && !isNaN(level)

  return <tr key={key}>
    <td>{name}</td>
    <td>{hasLevel ? level : '--'}</td>
    <td>{hasLevel ? stat + level : <span className="danger">UNSKILLED</span>}</td>
  </tr>
}

const Attribute = ({ data, key }) => {
  const { name, stat, skills } = data

  return <section id={name + '_attribute'} key={key} className="attribute">
    <h3>{name}: {stat}</h3>
    <table>
      <thead>
        <tr>
          <th>Skill</th>
          <th>Level</th>
          <th>Asset</th>
        </tr>
      </thead>
      <tbody>
        {skills.map((skill, i) => {
          const subSkills = skill['sub-skills']

          return subSkills
            ? <><Skill stat={stat} data={skill} key={i} />{subSkills.map((sub, i) => <Skill stat={stat} data={{ ...sub, name: ' - ' + sub.name }} key={i} />)}</>
            : <Skill stat={stat} data={skill} key={i} />
        })}
      </tbody>
    </table>
  </section>
}

const Attributes = ({ user, data }) => <>
  <h2>ATTRIBUTES</h2>
  <table>
    <tbody>
      <tr>
        <td>PROFILE:</td>
        <td>{user}</td>
      </tr>
      <tr>
        <td>TIME/DATE:</td>
        <td>{(new Date()).toLocaleString()}</td>
      </tr>
    </tbody>
  </table>
  <article id="attributes">
    {data.map((attribute, i) => <Attribute data={attribute} key={i} />)}
  </article>
</>

export default Attributes
