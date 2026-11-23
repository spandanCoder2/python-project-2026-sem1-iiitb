import React from 'react'
import { useState } from 'react'

function Analytics() {

    const [name , setName] = useState('')
    const [club , setClub] = useState('')
    const [status , setStatus] = useState('member')
    const [data, setData] = useState([])
    
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const renderData = async () => {
          try {
            const response = await fetch(`http://localhost:8000/analytics/${status}?club=${club}&member=${name}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result);
            setData(result);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };

  return (
    <div className='min-h-screen bg-slate-950 , text-white'>
        
  <div className="container px-5 py-24 mx-auto">
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-wrap p-10 mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
      <div className="relative sm:mb-0 flex-grow w-full m-5">
        <label for="full-name" className="leading-7 text-sm text-gray-400">Name</label>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" id="full-name" name="full-name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative sm:mb-0 flex-grow w-full m-5">
        <label for="club" className="leading-7 text-sm text-gray-400">Club</label>
        <input value={club} onChange={(e)=>{setClub(e.target.value)}} type="text" id="club" name="club" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative sm:mb-0 flex-grow w-full m-5">
        <label for="type" className="leading-7 text-sm text-gray-400">Core</label>
        <input onChange={(e)=>{if(e.target.value){setStatus('core')}}} type="radio" id="core" name="type" className="mx-2 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <label for="type" className="leading-7 text-sm text-gray-400">Non-Core</label>
        <input onChange={(e)=>{if(e.target.value){setStatus('member')}}} type="radio" id="non-core" name="type" className=" mx-2 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <label for="type" className="leading-7 text-sm text-gray-400">Participant</label>
        <input onChange={(e)=>{if(e.target.value){setStatus('students')}}} type="radio" id="participant" name="type" className="mx-2 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={renderData} className="text-white m-5 bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Check</button>
    </div>
  </div>
      <section className="text-gray-400 body-font flex flex-wrap justify-center">
  {Object.entries(data) && Object.entries(data).map(([key,value])=>{
    return(
            <div className="parent">
    <div className="flex flex-wrap min-w-1/3">
      <div className="xl:w-1/3 md:w-1/2 p-4 ">
        <div className="border border-gray-700 border-opacity-75 p-6 min-w-[33vw] rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">{key}</h2>
          <p className="leading-relaxed text-base">No of Events Attended: {value}</p>
        </div>
    </div>
    </div>
    </div>
  )})}
</section>
    </div>
  )
}

export default Analytics
