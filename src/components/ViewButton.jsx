import React from 'react'

const ViewButton = ({onClick,children}) => {
  return (
    <button
    onClick={onClick}
    className='w-50 h-13 text-black cursor-pointer text-base font-bold text-center 
 rounded-[10px] border border-solid border-transparent px-7 py-[0.6em]
 bg-[#f59a9a] transition-all duration-200 hover:shadow-[0px_0px_17px_-4px_#2b2bff] 
 hover:border-[#3838ff] hover:bg-[#6e6eff] active:shadow-[0px_0px_17px_-4px_#2b2bff] 
 active:border-[#3838ff] active:scale-95'
    >
        {children}
    </button>
  )
}

export default ViewButton