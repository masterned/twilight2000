import React from 'react'

const Attribute = ({ data }) => {
  const { name, stat, skills } = data

  return <section className="attribute">
    <h3>{name}: {stat}</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Level</th>
          <th>Asset</th>
        </tr>
      </thead>
      <tbody>
        {skills.map(({ name, level }, i) => {
          const hasLevel = level !== null && level !== undefined && !isNaN(level)

          return (
            <tr key={i}>
              <td>{name}</td>
              <td>{hasLevel ? level : '--'}</td>
              <td>{hasLevel ? stat + level : <span className="danger">UNSKILLED</span>}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </section>
}

const Attributes = ({ attributes }) => <section>
  <h2>Attributes and Skills</h2>
  <div id="attributes">
    {attributes.map((attr, i) => <Attribute data={attr} key={i} />)}
  </div>
</section>

export default Attributes
