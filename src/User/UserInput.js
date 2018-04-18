import React from 'react';

import './User.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input className="Input" type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
};

export default userInput;
