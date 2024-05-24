import dayjs from 'dayjs'



function JobCard(props) {
    // const skills = ["Tally","Cash Management", "Sales", "Presentation", "On-field"]
    const date = dayjs(Date.now())
    const diffInDays = date.diff(props.postedOn, 'day')
   
      
      const handleSubmit = () => {
          
          alert("The details have been sent to your email")
      };

  return (
    <div className='flex mx-40 mb-4 justify-center'>
        <div className='flex-row justify-between item-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
            <div className='flex-col items-start gap-3'>
          <h1>{props.title} - {props.company}</h1>
          <p>{props.type}&#x2022;{props.experience} &#x2022;{props.location}</p>
        
        <div className='items-center gap-2'>
           {props.skills.map((skill)=>(
             <p key={skill} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
           ))}
        </div>
        </div>
        <div className='flex items-center gap-4'>
            <p className='text-gray-500'>Posted {diffInDays > 1? `${diffInDays} days`:  `${diffInDays} day`} ago </p>
            <a href={props.job_link} target='_blank' rel="noopener noreferrer"></a>
            <button className='text-blue-500 border hover:bg-blue-200 border-blue-500 px-10 py-1 rounded-md' onClick={handleSubmit}>Apply</button>
        </div>
    </div>
    </div>
  )
}

export default JobCard