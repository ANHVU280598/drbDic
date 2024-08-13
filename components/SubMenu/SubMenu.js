'use client'
import React, { useEffect, useState } from 'react'
import Detail from '../Detail/Detail'

export default function SubMenu({ optionVal }) {
  const [selected, setSelected] = useState()
  const [currentSubIdx, setCurrentSubIdx] = useState()
  const submenu = [
    {
      stage: 'PREP STEPS',
      sections: ['MWS - SWS','NPU', 'ROUTER']
    },
    {
      stage: 'STAGER',
      sections: []
    },
    {
      stage: 'TESTING',
      sections: []
    },
    {
      stage: 'PACKAGING',
      sections: []
    }
  ]

  useEffect(() => {
    setSelected()
  }, [optionVal])

  const state_submenu = submenu.find(item => item.stage === optionVal.label).sections
  
  const selectSubOpt = (e) => {
    setSelected(e)
    setCurrentSubIdx(e.idx)
  }

  console.log(currentSubIdx);
  
  return (
    <div className='w-full space-y-5'>
      <div className='grid grid-cols-3 w-full mt-5 text-center'>
        {
          state_submenu.map((val, idx) => (
            <div className='flex items-center justify-center w-full text-xs cursor-pointer' key={val} onClick={() => selectSubOpt({ stage: optionVal.label, sections: val, idx:idx })}>
              <div className={`flex w-[100px] justify-center p-2 pl-2 pr-2 ${(currentSubIdx == idx) ? 'bg-red-800/20' : 'bg-gray-800/20'}  rounded-full text-center`}>
                {val}
              </div>
            </div>
          ))
        }
      </div>
      <div className='w-full'>
          {
            selected && <Detail stage={selected.stage} sections={selected.sections} />
          }
        </div>
    </div>
  )
}
