'use client'
import React, { useState } from 'react'

export default function () {
    const [inputValue, setInputValue] = useState("")

    const program_options_obj = [
        {
            option_part_number: "U0056",
            activation_code: "POS Credit Interface",
            accessory: []
        },
        {
            option_part_number: "U0057",
            activation_code: "POS Credit Interface",
            accessory: [
                {
                    name: "SA2403",
                    descrip: "Unitec Web Access Router"
                },
                {
                    name: "SA2402",
                    descrip: "POS Credit Interface Router"
                },
                {
                    name: "SS1005",
                    descrip: "Vfone Credit & Network Setup (manual)"
                }
            ]
        },

    ]

    return (
        <div className='flex flex-col h-full w-full items-center justify-center p-5'>
            <div className='flex flex-row w-full'>
                <input className='text-center h-[60px] w-[350px] rounded-xl' type='text' placeholder='Type in Option Part Number' onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <div className='w-full'>
                {
                    program_options_obj.map((value, index) => (
                        <div className='mt-5'>
                            {
                                (value.option_part_number == inputValue.toLocaleUpperCase()) ?
                                    <div className='flex flex-col w-full'>
                                        <div>v2024.0.1</div>
                                        <div className='text-xl'>Activation Code:  <span className='text-red-900 text-lg'>{value.activation_code}</span></div>
                                        <div className='flex flex-col text-xl'>
                                            {
                                                (value.accessory.length != 0) && <div>   <span>Accessories: </span>
                                                    {
                                                        value.accessory.map((accVal, index) => (
                                                            <div className='ml-[50px] text-red-900 text-lg'><span className='font-bold'>{accVal.name}</span> {accVal.descrip}</div>
                                                        ))
                                                    } </div>
                                            }


                                        </div>
                                    </div>
                                    :
                                    <div></div>
                            }
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
