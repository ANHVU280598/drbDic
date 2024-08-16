import Image from 'next/image'
import React from 'react'


export default function ImgDispl({src}) {
    
    return (
        <div className={`relative h-[600px] w-[430px]`}>
            <Image
                className=''
                alt='No Image Found'
                src={src}
                priority
                fill
             
                style={{ objectFit: 'contain' }}
            />
        </div>
    )
}