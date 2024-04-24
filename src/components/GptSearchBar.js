import React from 'react'

const GptSearchBar = () => {
  return (
    <div>
        <form>
            <input className='p-4 m-4' placeholder='What would you like to watch today'/>
            <button className='py-2 px-4 bg-red-700'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar