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
        <div className='flex flex-col justify-center items-center w-full mt-5 bg-gradient-to-t from-slate-500/30 to-transparent'>
            <Select placeholder='Please select options' autoFocus={false}  className='' style={{ width: '200px' }} options={options} onChange={(values) => setValues(values)} />
            {
                (values) && <SubMenu optionVal={values[0]} />
            }             
        </div>
    )
}