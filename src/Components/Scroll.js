import React from 'react';

const Scroll = (props) => {
    return(
        <div className="scroll" style={{overflowY: 'scroll', border: '3px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;