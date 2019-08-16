import React, { useState } from 'react'

const SmurfForm = (props) => {

    // const [newSmurf, setNewSmurf] = useState(props.newSmurf)


    const handleChange = e => {
        // setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h1>Add Smurf</h1>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter smurf name"
                // value={newSmurf.name}
                // onChange={handleChange}
                />
                <input
                    type="text"
                    name="height"
                    placeholder="Enter smurf height"
                // value={newSmurf.height}
                // onChange={handleChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Enter smurf age"
                // value={newSmurf.age}
                // onChange={handleChange}
                />
                <button>Add Smurf!</button>
            </form>
        </div>
    )
}

export default SmurfForm
