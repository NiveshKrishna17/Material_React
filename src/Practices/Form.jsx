import React, { Fragment, useState } from 'react'

export default function Form() {
    const [data, setData] = useState({ email: "", password: "" })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <Fragment>
            <p>Form</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <input type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type='submit'>Submit</button>
            </form>
        </Fragment>
    )
}
