
import React from 'react';


import './form-input.style.scss';

const FormInput = ({handleChange, lable, ...otherProps}) => (

    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}  />
        
        {
            lable? (
            <span className={`${otherProps.value.length?'shirnk':''
            } form-input-lable`} >
              {lable}
            </span>
            ):
            null
        }
    </div>
)

export default FormInput;