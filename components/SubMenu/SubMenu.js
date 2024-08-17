'use client'
import React, { useEffect, useState } from 'react'
import Detail from '../Detail/Detail'

export default function SubMenu({ optionVal }) {
  const [selected, setSelected] = useState()
  const [currentSubIdx, setCurrentSubIdx] = useState()
  // const [submenu, setSubMenu] = useState()
  const submenu = [
    {
      stage: 'PREP STEPS',
      sections: ["IMAGING", "ROUTER", "MWS - SWS", "NPU", "OTT", "VEGA CAMERA"]
    },
    {
      stage: 'STAGER',
      sections: ["BUILDING RACK"]
    },
    {
      stage: 'TESTING-FINAL SET UP',
      sections: ["SERVER", "MWS1 - LUBEBAY", "sal1-greeter1-cashier1-wash1-OTT", "KPT", "TTT-WAP"]
    },
    {
      stage: 'PACKAGING',
      sections: []
    }
  ]

  // useEffect(()=> {
  //     async function fetchData() {
  //       const res = await fetch('https://raw.githubusercontent.com/ANHVU280598/drbDic/main/subMenu.json')
  //       const json = await res.json()
  //       setSubMenu(json)   
  //     }
  //     fetchData()
  // },[])

  useEffect(() => {
    setSelected()
  }, [optionVal])

  if (!submenu) return <>Loading.....</>

  console.log(submenu);
  
  const state_submenu = submenu.find(item => item.stage === optionVal.label).sections
  
  const selectSubOpt = (e) => {
    setSelected(e)
    setCurrentSubIdx(e.idx)
  }

 
  
  return (
    <div className='w-full space-y-5'>
      <div className='grid grid-cols-3 w-full text-center gap-y-5 mt-5'>
        {
          state_submenu.map((val, idx) => (
            <div className='flex items-center justify-center w-full text-xs cursor-pointer' key={val} onClick={() => selectSubOpt({ stage: optionVal.label, sections: val, idx:idx })}>
              <div className={`flex w-[150px] justify-center p-2 pl-2 pr-2 ${(currentSubIdx == idx) ? 'bg-red-800/20' : 'bg-gray-800/20'}  rounded-full text-center`}>
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
