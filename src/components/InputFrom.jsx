import React from 'react'

const from = () => {
  return (
    <div>
        <div className="mt-8 ">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-semibold mb-2">Create User Here</h2>
          <div className="flex flex-wrap gap-4">
            <input
              className="px-4 py-2 bg-white rounded shadow-sm flex-1"
              placeholder="Name"
            />
            <input
              className="px-4 py-2 bg-white rounded shadow-sm flex-1"
              placeholder="Last Name"
            />
            <input
              className="px-4 py-2 bg-white rounded shadow-sm flex-1"
              placeholder="Position"
            />
            <button
              className="px-5 py-2 rounded bg-indigo-500 text-white font-medium transition-all duration-200 hover:shadow-[0px_0px_17px_-4px_#2b2bff] 
 hover:border-[#3838ff] hover:bg-[#6e6eff] active:shadow-[0px_0px_17px_-4px_#2b2bff] 
 active:border-[#3838ff] active:scale-95"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default from