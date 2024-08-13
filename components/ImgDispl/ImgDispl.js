import Image from 'next/image'
import React from 'react'


export default function ImgDispl({src}) {
    
    return (
        <div className={`relative h-[250px] w-[250px]`}>
            <Image
                className=''
                alt='No Image Found'
                src={src}
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
            />
        </div>
    )
}