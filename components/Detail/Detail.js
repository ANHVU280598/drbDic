'use client'
import React, { useEffect, useState } from 'react'
import ImgDispl from '../ImgDispl/ImgDispl'

export default function Detail({ stage, sections }) {
    const [prep_step, setData] = useState()
    
    useEffect(()=> {
        console.log('work');
        
        async function fetchData() {
            const res = await fetch('https://raw.githubusercontent.com/ANHVU280598/drbDic/main/data.json')
            const json = await res.json();
            setData(json);
        }
        fetchData()
    }, [])

    // const prep_step = [
    //     // SET UP NPU
    //     {
    //         section: "NPU",
    //         steps: [
    //             {
    //                 step: 1,
    //                 detail: 'Follow the setup instructions for MWS and SWS.',
    //                 img_src: ''
    //             },
    //             {
    //                 step: 2,
    //                 detail: 'Log in with the username "NoPileUps" and password "N0PileUp$".',
    //                 img_src: ''
    //             },
    //             {
    //                 step: 3,
    //                 detail: 'Change the computer description. Go to Control Panel -> System -> Change Settings -> System Properties.',
    //                 img_src: '/NPU/image_3.png'
    //             },
    //             {
    //                 step: 4,
    //                 detail: 'Install Bomgar. Insert the USB, then run "Bomgar Install-NPU.bat" as an administrator.',
    //                 img_src: '/NPU/image_4.png'
    //             },
    //             {
    //                 step: 5,
    //                 detail: 'Verify the setup. Turn on Bomgar on your laptop, go to My Jump Group, and search for the locator name.',
    //                 img_src: '/NPU/image_5.png'
    //             },
    //             {
    //                 step: 6,
    //                 detail: 'Edit the Jump Client as needed.',
    //                 img_src: '/NPU/image_6.png'
    //             }
    //         ]
    //     },
    //     // SET UP MWS SWS
    //     {
    //         section: "MWS - SWS",
    //         steps: [
    //             {
    //                 step: 1,
    //                 detail: 'Turn on the CPU. Follow the Set Up Sheet to configure the computer.',
    //                 img_src: '/MWS/image_1.png'
    //             },
    //             {
    //                 step: 2,
    //                 detail: 'Wait for the computer to start up. Navigate to the "Finish Install" folder and run "Install SW USB" as admin (do not reboot).',
    //                 img_src: '/MWS/image_2.png'
    //             },
    //             {
    //                 step: 3,
    //                 detail: 'Plug in the SSD, install the correct SW version, and then run the finalize process.',
    //                 img_src: '/MWS/image_3.png'
    //             },
    //             {
    //                 step: 4,
    //                 detail: 'Label the device.',
    //                 img_src: '/MWS/image_4.png'
    //             },
    //             {
    //                 step: 5,
    //                 detail: 'For MWS, after setup, open Internet Explorer, go to sitewatch.cloud, add it to favorites, and drag the icon to the desktop.',
    //                 img_src: '/MWS/image_5.png'
    //             }
    //         ]
    //     },
    //     // ROUTER
    //     {
    //         section: "ROUTER",
    //         steps: [
    //             {
    //                 step: 1,
    //                 detail: "Plug in the router.  Network cable from Setup PC into X0, and WAN network in X1",
    //                 img_src: "/ROUTER/image_1.png"
    //             },
    //             {
    //                 step: 2,
    //                 detail: "Wait for the router to power on. Use your laptop, open Bomgar, log in, navigate to the 'Warehouse' group, and select the router.",
    //                 img_src: "/ROUTER/image_2.png"
    //             },
    //             {
    //                 step: 3,
    //                 detail: "Open a web browser and go to 192.168.168.168. Use the login name 'admin' and the password 'password'. If it prompt change password > change to 'Password'",
    //                 img_src: ""
    //             },
    //             {
    //                 step: 4,
    //                 detail: "Navigate to Device > Settings > Firmware and Settings > Upload Firmware. Select the firmware file from the 'TZ-270' folder (Note: The firmware file should have a *.bin.sig extension).",
    //                 img_src: "/ROUTER/image_4.png"
    //             },
    //             {
    //                 step: 5,
    //                 detail: "Let the firmware install automatically. Ignore any warnings. Once completed, the router will restart itself.",
    //                 img_src: "/ROUTER/image_5.png"
    //             },
    //             {
    //                 step: 6,
    //                 detail: "Log back in to the browser 192.168.168.168. Navigate to Device > Setting > Firmwaare and Settings. Click Import/ Export Configuration. Select Import Configuration. Navigate to TZ270 folder. Choose the right version. Click Import. Ignore the 'Network Error'",
    //                 img_src: ""
    //             },
    //             {
    //                 step: 7,
    //                 detail: "Verify Configuration. Open a web browser and go to 192.168.100.1. Use the login name 'admin' and the password 'Password'.",
    //                 img_src: ""
    //             },
    //             {
    //                 step: 8,
    //                 detail: "Navigate to Device.",
    //                 img_src: ""
    //             },
    //         ]
    //     },
    //     // IMAGING
    //     {
    //         section: "IMAGING",
    //         steps: [
    //             {
    //                 step: 1,
    //                 detail: "Plug in the CPU and connect all necessary peripherals, such as the monitor, keyboard, and mouse.",
    //                 img_src: "/IMAGING/image_1.png"
    //             },
    //             {
    //                 step: 2,
    //                 detail: "Power on the CPU. As the system starts, press the 'DEL' key on the keyboard to enter the BIOS setup utility.",
    //                 img_src: ""
    //             },
    //             {
    //                 step: 3,
    //                 detail: "In the BIOS menu, navigate to the 'Boot' tab using the arrow keys. Set 'Boot Option #1' to the UEFI: Generic Flash Drive (or the name of your bootable device).",
    //                 img_src: "/IMAGING/image_3.png"
    //             },
    //             {
    //                 step: 4,
    //                 detail: "Save the changes and exit the BIOS. The system will reboot automatically.",
    //                 img_src: ""
    //             },
    //             {
    //                 step: 5,
    //                 detail: "Wait for the operating system installation to complete. The system will restart, and the 'Set Up Computer' window will appear.",
    //                 img_src: "/IMAGING/image_5.png"
    //             }
    //         ]


    //     },
    // ]

    if (!prep_step) {
        return <div>Loading...</div>;
      }
      
    return (
        <div className='ml-5'>
            {
                (stage) && <>{
                    prep_step.map((val, idx) => (
                        <div key={val.section} className=''>
                            {
                                (val.section == sections) &&
                                <>
                                    {
                                        val.steps.map((inVal, index) => (
                                            <div className='flex flex-col w-full' key={inVal.detail}>
                                                <div className='grid grid-cols-6 w-full'>
                                                    <div className='w-full font-bold'>Step {inVal.step}</div>
                                                    <div className='col-span-5 w-full text-md'>{inVal.detail}</div>
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
            }
        </div>
    )
}
