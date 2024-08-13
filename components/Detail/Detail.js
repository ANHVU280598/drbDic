import React from 'react'
import ImgDispl from '../ImgDispl/ImgDispl'

export default function Detail({ stage, sections }) {

    const prep_step = [
        {
            section: "NPU SET UP",
            steps: [
                {
                    step: 1,
                    detail: 'Follow Set Up For MWS, SWS',
                    img_src: ''
                }
                ,
                {
                    step: 2,
                    detail: 'Login user-name: NoPileUps and password: N0PileUp$',
                    img_src: ''
                }
                ,
                {
                    step: 3,
                    detail: 'Change Computer Description. Go to Control Panel -> system -> change setting -> system properties',
                    img_src: '/NPU/image_3.png'
                }
                ,
                {
                    step: 4,
                    detail: 'Install Bomgar. Insert USB -> run as Admin file_name "Bomgar Install-NPU.bat"',
                    img_src: '/NPU/image_4.png'
                }
                ,
                {
                    step: 5,
                    detail: 'Verify, turn on Bomgar on you laptop -> My jumgroup -> search "locator name"',
                    img_src: '/NPU/image_5.png'
                }
                ,
                {
                    step: 6,
                    detail: 'Edit Jump Client',
                    img_src: '/NPU/image_6.png'
                }
            ]
        },
        {
            section: "MWS - SWS SET UP",
            steps: [
                {
                    step: 1,
                    detail: 'Turn on CPU, Fill out Set Up Computer base on Set Up Sheet -> Configure Computer',
                    img_src: '/MWS/image_1.png'
                }
                ,
                {
                    step: 2,
                    detail: 'Wait until it start up -> navigate to finish install folder -> run as admin "Install SW USB - Dont REBOOT"',
                    img_src: '/MWS/image_2.png'
                }
                ,
                {
                    step: 3,
                    detail: 'plugin SSD -> install correct SW version -> then run finallize',
                    img_src: '/MWS/image_3.png'
                }
                ,
                {
                    step: 4,
                    detail: 'Label',
                    img_src: '/MWS/image_4.png'
                }
                ,
                {
                    step: 5,
                    detail: 'For MWS, after set up -> IE ->sitewatch.cloud-> add to favourite -> drag icon to desktop',
                    img_src: '/MWS/image_5.png'
                }
            ]
        }
    ]

    return (
        <div className='ml-5'>
            {
                (stage === "PREP STEPS") && <>{
                    prep_step.map((val, idx) => (
                        <div key={val.section} className='space-y-5'>
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
