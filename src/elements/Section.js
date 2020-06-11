import React from 'react'

const getEntries = obj => Object.entries(obj)

const Section = ({ name, data = {} }) => {
    const entries = getEntries(data)
    return <section id={name}>
        <h2>{name.toLocaleUpperCase()}</h2>
        <table>
            <tbody>
                {entries.map((entry, i) => <tr key={i}>
                    <th>{entry[0].toLocaleUpperCase()}:</th>
                    <td>{entry[1]}</td>
                </tr>)}
            </tbody>
        </table>
    </section>
}

export default Section
