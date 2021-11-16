import React from 'react'
import {useHistory} from 'react-router-dom'

const Homepage = () => {
    let history = useHistory()
    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={()=>history.push('/gh-pages-react-router-test/secondpage')}>Click here</button>
        </div>
    )
}

export default Homepage