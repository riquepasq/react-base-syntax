import React from 'react';

import './User.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p className='Name'>{props.username}</p>
            <p className='Awesome'>Awesome course!</p>
        </div>
    )
};

export default userOutput;