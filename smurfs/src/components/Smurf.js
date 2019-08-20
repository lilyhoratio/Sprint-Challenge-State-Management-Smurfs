import React from 'react'

const Smurf = ({ smurf }) => {
    // console.log("smurf props", smurf)
    return (
        <div>
            <h3>{smurf.name}</h3>
            <p>{smurf.height} short</p>
            <p>{smurf.age} years old</p>
        </div>
    )
}

export default Smurf
