import React from 'react'

export default function OutputBox({outputValue}) {
  return (
    <>
    <div className="
                  mt-2 w-full
                  rounded-xl
                  border border-slate-300 dark:border-slate-600
                  bg-slate-50 dark:bg-slate-900
                  shadow-inner
                  overflow-hidden
                ">
                  
                  <div className="
                    px-2 py-2
                    bg-slate-200 dark:bg-slate-800
                    border-b border-slate-300 dark:border-slate-600
                    text-xs font-semibold
                    text-slate-700 dark:text-slate-300
                    tracking-wide
                  ">
                    OUTPUT
                  </div>
    
                  {/* Content */}
                  <div className="
                    px-4 py-2
                    text-center
                    text-lg font-mono
                    text-slate-900 dark:text-slate-100
                  ">
                    {outputValue}
                  </div>
    
                </div>
    </>
  )
}
