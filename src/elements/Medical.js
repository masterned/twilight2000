import React from 'react'

const getWoundStatus = medical => contact => {
    const { hits, caps } = medical
    const hit = hits[contact]
    const capacity = caps[contact]

    if (hit > (capacity * 2)) return <span className="error">CRITICAL</span>
    if (hit > capacity) return <span className="danger">SERIOUS</span>
    if (hit > (capacity * 0.50)) return <span className="warning">SLIGHT</span>
    if (hit > 0) return <span>SCRATCH</span>
    return <span></span>
}

const Contacts = ({ data }) => <thead>
    <tr>
        <th>point_of_contact</th>
        {Object.keys(data).map((key, i) => <th key={i}>{key}</th>)}
    </tr>
</thead>

const Hits = ({ data }) => <tr>
    <th>current_hits:</th>
    {Object.values(data).map((value, i) => <td key={i}>{value}</td>)}
</tr>

const Capacities = ({ data }) => <tr>
    <th>base_hits_capacity</th>
    {Object.values(data).map((value, i) => <td key={i}>{value}</td>)}
</tr>

const Statuses = ({ data }) => <tr>
    <th>wound_status:</th>
    {(Object.keys(data.caps)).map((contact, i) => <td key={i}>{getWoundStatus(data)(contact)}</td>)}
</tr>

const Medical = ({ data }) => <>
    <h2>medical</h2>
    <article id="medical">
        <table>
            <Contacts data={data.caps} />
            <tbody>
                <Hits data={data.hits} />
                <Statuses data={data} />
                <Capacities data={data.caps} />
            </tbody>
        </table>
    </article>
</>

export default Medical
