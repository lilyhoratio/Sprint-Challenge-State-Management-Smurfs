import React from 'react'
import Smurf from './Smurf'

const SmurfList = (props) => {
    console.log("smurfs list props:", props)
    return (
        <div>
            <h2>Smurfs List!</h2>
            {/* {props.smurfsArray.map((smurf, index) => {
                <Smurf smurf={smurf} key={index} />
            })} */}
        </div>
    )
}

export default SmurfList
