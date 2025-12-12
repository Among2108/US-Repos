import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const InputFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
    })
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
  const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://67eca027aa794fb3222e43e2.mockapi.io/members", formData)
    } catch (error) {
      console.log(error.response?.data || error.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <>
        <div className="mt-8 ">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-semibold mb-2">Create User Here</h2>
          <div >
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
           <input
              className="px-4 py-2 bg-white rounded shadow-sm flex-1"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}

            />
            <input
              className="px-4 py-2 bg-white rounded shadow-sm flex-1"
              placeholder="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              disabled={loading}
            />
            <input
              className="px-4 py-2 bg-white rounded shadow-sm flex-1"
              placeholder="Position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              disabled={loading}
            />
            <button
              disabled={loading}
              className="px-5 py-2 rounded bg-indigo-500 text-white font-medium transition-all duration-200 hover:shadow-[0px_0px_17px_-4px_#2b2bff]
 hover:border-[#3838ff] hover:bg-[#6e6eff] active:shadow-[0px_0px_17px_-4px_#2b2bff]
 active:border-[#3838ff] active:scale-95"
            >
              {loading ? "Saving..." : "Save"}
            </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default InputFrom