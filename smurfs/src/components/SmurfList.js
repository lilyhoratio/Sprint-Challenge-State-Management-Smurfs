import React from 'react'
import Smurf from './Smurf'

const SmurfList = ({ smurfsArray, isLoading }) => {
    console.log("smurfs list props:", smurfsArray)
    return (
        <div>
            <h2>Smurfs List!</h2>
            {isLoading ? "Loading..." : smurfsArray.map(smurf => (
                <Smurf smurf={smurf} key={smurf.id} />
            ))}
        </div>
    )
}

export default SmurfList
