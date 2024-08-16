'use client'
import React, { useEffect, useState } from 'react'
import ImgDispl from '../ImgDispl/ImgDispl'

export default function Detail({ stage, sections }) {
    // const [prep_step, setData] = useState()

    // useEffect(() => {
    //     console.log('work');

    //     async function fetchData() {
    //         const res = await fetch('https://raw.githubusercontent.com/ANHVU280598/drbDic/main/data.json')
    //         const json = await res.json();
    //         setData(json);
    //     }
    //     fetchData()
    // }, [])

    const prep_step = [
        // SET UP OTT
        {
            section: "OTT",
            img_srcs: [
                "/OTT/OTT_1.jpg",
                "/OTT/OTT_2.jpg",
                "/OTT/OTT_3.jpg",
                "/OTT/OTT_4.jpg",
            ]
        },
        // IMAGING
        {
            section: "IMAGING",
            img_srcs: [
                "/IMAGING/IMAGING_1.jpg",
                "/IMAGING/IMAGING_2.jpg",
                "/IMAGING/IMAGING_3.jpg",
            ]
        },
        // IMAGING
        {
            section: "ROUTER",
            img_srcs: [
                "/ROUTER/ROUTER_1.jpg",
                "/ROUTER/ROUTER_2.jpg",
                "/ROUTER/ROUTER_3.jpg",
            ]
        },
        // NPU
        {
            section: "NPU",
            img_srcs: [
                "/NPU/NPU_1.jpg",
                "/NPU/NPU_2.jpg",
                "/NPU/NPU_3.jpg",
                "/NPU/NPU_4.jpg"
            ]
        },
        // MWS - SW
        {
            section: "MWS - SWS",
            img_srcs: [
                "/MWS/MWS_1.jpg",
                "/MWS/MWS_2.jpg",
                "/MWS/MWS_3.jpg"
            ]
        },
        // VEGA - CAMERA
        {
            section: "VEGA CAMERA",
            img_srcs: [
                "/VEGA_CAMERA/VEGA_CAMERA_1.jpg",
                "/VEGA_CAMERA/VEGA_CAMERA_2.jpg",
                "/VEGA_CAMERA/VEGA_CAMERA_3.jpg"
            ]
        },
        // BUILDING RACK
        {
            section: "BUILDING RACK",
            img_srcs: [
                "/BUILDINGRACK/BUILDING_RACK_1.jpg",
                "/BUILDINGRACK/BUILDING_RACK_2.jpg",
                "/BUILDINGRACK/BUILDING_RACK_3.jpg",
                "/BUILDINGRACK/BUILDING_RACK_4.jpg",
                "/BUILDINGRACK/BUILDING_RACK_5.jpg",
                "/BUILDINGRACK/BUILDING_RACK_6.jpg",
            ]
        }
    ]

    // if (!prep_step) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className='overflow-x-hidden'>
            {/* {
                (stage) && <>{
                    prep_step.map((val, idx) => (
                        <div key={val.section} className=''>
                            {
                                (val.section == sections) &&
                                <>
                                    {
                                        val.steps.map((inVal, index) => (
                                            <div className='flex flex-col w-full mt-[30px]' key={inVal.detail}>
                                                <div className='grid grid-cols-6 w-full'>
                                                    <div className='w-full font-bold'>Step {inVal.step}</div>
                                                    <div className='col-span-4 w-full text-md'>{inVal.detail}</div>
                                                </div>
                                                {inVal.img_src && <div className='flex w-full justify-center items-center'>
                                                    <ImgDispl src={inVal.img_src} />
                                                </div>
                                                }
                                            </div>
                                        ))
                                    }
                                </>
                            }
                        </div>
                    ))
                }
                </>
            } */}
            {
                (stage) && <>{
                    prep_step.map((val, idx) => (
                        <div key={val.section} className=''>
                            {
                                (val.section == sections) &&
                                <div className='mt-5'>
                                    {
                                        val.img_srcs.map((src, index) => (
                                            <ImgDispl src={src} key={src} />
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    ))
                }
                </>
            }
        </div>
    )
}
