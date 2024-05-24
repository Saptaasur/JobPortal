import React, { useState } from 'react'

function SearchBar(props) {
    const [jobCriteria,setJobCriteria] = useState({
        title:"",
        location:"",
        experience:"",
        type:""
    })

    const handleChange = (e) => {
    setJobCriteria((prevState) =>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
    }
     
     const search = async() => {
        await props.fetchJobsCustom(jobCriteria)
     }
  return (
    <div className='gap-4 my-10 justify-center px-10'>
        <select onChange={handleChange} name='title' className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' value={jobCriteria.title}>
            <option value="" disabled hidden selected>Job Role</option>
            <option value="Accountant">Accountant</option>
            <option value="Cashier">Cashier</option>
            <option value="Product Developer">Product Developer</option>
            <option value="Sales Executive">Sales Executive</option>
            <option value="Field Assistant">Field Assistant</option>
        </select>
        <select onChange={handleChange} name='location' className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' value={jobCriteria.location}>
            <option value="" disabled hidden selected>Location</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>           
        </select>
        <select onChange={handleChange} name='type' className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' value={jobCriteria.type}>
            <option value="" disabled hidden selected>Type</option>
            <option value="Internship">Internship</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contractual">Contractual</option>           
        </select>
        <select onChange={handleChange} name='experience' className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' value={jobCriteria.experience}>
            <option value="" disabled hidden selected>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior level">Senior level</option>           
        </select>
        <button onClick={search} className='w-64 h-10 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 '>Search</button>
    </div>
  )
}

export default SearchBar