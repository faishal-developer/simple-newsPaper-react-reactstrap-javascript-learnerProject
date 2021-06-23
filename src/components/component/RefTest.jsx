import React from 'react'

const RefTest=React.forwardRef((props,ref)=> {
    return (
        <div ref={ref} className='jumbotron'>
            <h1>Learning Program</h1>
        </div>
    )
})

export default RefTest
