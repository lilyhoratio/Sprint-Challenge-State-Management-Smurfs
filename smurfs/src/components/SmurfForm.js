import React, { useState } from 'react'
// import axios from "axios"

const SmurfForm = (props) => {
    console.log("form props", props)

    const [newSmurf, setNewSmurf] = useState("")
    console.log("new smurf", newSmurf)

    const handleChange = e => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(newSmurf)
        // setNewSmurf("")
    }

    return (
        <div>
            <h1>Add Smurf</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter smurf name"
                    // value={newSmurf.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="height"
                    placeholder="Enter smurf height"
                    // value={newSmurf.height}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Enter smurf age"
                    // value={newSmurf.age}
                    onChange={handleChange}
                />
                <button>Add Smurf!</button>
            </form>
        </div>
    )
}

export default SmurfForm
