import React from 'react'

const Smurf = ({ smurf }) => {
    // console.log("smurf props", smurf)
    return (
        <div>
            <p>{smurf.name}</p>
            <p>{smurf.height} short</p>
            <p>{smurf.age} years old</p>
        </div>
    )
}

export default Smurf
