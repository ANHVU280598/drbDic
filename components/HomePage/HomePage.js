'use client'
import React, { useState } from 'react'
import Select from "react-dropdown-select";
import SubMenu from '../SubMenu/SubMenu';
export default function HomePage() {
    const [values, setValues] = useState('')

    const options = [
        {
            value: 1,
            label: 'PREP STEPS'
        },
        {
            value: 2,
            label: 'STAGER'
        },
        {
            value: 3,
            label: 'TESTING'
        },
        {
            value: 4,
            label: 'PACKAGING'
        }
    ];
    
    return (
        <div className='w-full'>
            <Select placeholder='Please select options' className='' style={{width: '200px'}} options={options} onChange={(values) => setValues(values)} />
               {
                (values) &&  <SubMenu optionVal={values[0]}/>
               }
              
        </div>
    )
}