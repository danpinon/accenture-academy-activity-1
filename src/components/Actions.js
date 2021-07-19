import React from 'react'

const Actions = ({ onClick, count }) => {
    return (
        <div>
            <button onClick={() => onClick(count - 1)}>Restar</button>
            <button onClick={() => onClick(count + 1)}>Sumar</button>
        </div>
    )
}

export default Actions
