'use client'
import React, { useEffect, useState } from 'react'
import ImgDispl from '../ImgDispl/ImgDispl'

export default function Detail({ stage, sections }) {

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
        },
        // SERVER
        {
            section: "SERVER",
            img_srcs: [
                "/SERVER/SERVER-1.jpg",
                "/SERVER/SERVER-2.jpg",
                "/SERVER/SERVER-3.jpg",
                "/SERVER/SERVER-4.jpg",
            ]
        },
        // MWS_LUBEBAY
        {
            section: "MWS1 - LUBEBAY",
            img_srcs: [
                "/MWS1_LUBEBAY/MWS1_LUBEBAY_1.jpg",
                "/MWS1_LUBEBAY/MWS1_LUBEBAY_2.jpg",
                "/MWS1_LUBEBAY/MWS1_LUBEBAY_3.jpg",
                "/MWS1_LUBEBAY/MWS1_LUBEBAY_4.jpg",
                "/MWS1_LUBEBAY/MWS1_LUBEBAY_5.jpg",
                "/MWS1_LUBEBAY/MWS1_LUBEBAY_6.jpg",
            ]
        },
        // SAL1-GREETER1-CASHIER1-POSSIFLEX-CASHWASH1
        {
            section: "sal1-greeter1-cashier1-wash1-OTT",
            img_srcs: [
                "/sal1-greeter1-cashier1-wash1-OTT/sal1_1.jpg",
                "/sal1-greeter1-cashier1-wash1-OTT/sal1_2.jpg",
            ]
        },
        // KPT
        {
            section: "KPT",
            img_srcs: [
                "/KPT/KPT_1.jpg",

            ]
        },
        // TTT's - WAPs
        {
            section: "TTT-WAP",
            img_srcs: [
                "/TTT-WAP/TTT-WAP-1.jpg",
                "/TTT-WAP/TTT-WAP-2.jpg"
            ]
        },
        ,
        // VEGA - CAMERA
        {
            section: "VEGA CAMERA",
            img_srcs: [
                "/VEGA_CAMERA/SA6223_1.jpg",
                "/VEGA_CAMERA/SA6223_2.jpg",
                "/VEGA_CAMERA/SA6223_3.jpg",
                "/VEGA_CAMERA/SA6223_4.jpg",
                "/VEGA_CAMERA/SA6223_5.jpg",
                "/VEGA_CAMERA/SA6223_6.jpg"
            ]
        }

    ]



    return (
        <div className='overflow-x-hidden'>
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
