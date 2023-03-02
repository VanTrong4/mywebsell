import React from 'react';

const ErrorInput = ({error}) => {
    return (
        Object.values(error).map((val)=>{
            return(
                <div key={val}>
                    <p>{val}</p>
                </div>
            )
        })
    );
};

export default ErrorInput;