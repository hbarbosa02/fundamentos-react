import React, { cloneElement } from 'react';

function Familia({children, ...props}) {
    return (
        <div>
            {
                children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    );
}

export default Familia;