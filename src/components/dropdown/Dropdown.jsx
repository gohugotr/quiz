import React from 'react'

const Dropdown = ({ data, setdifficultyChange }) => {
  return (
    <div className='dropdown'>
      <select onChange={(e) => setdifficultyChange(e.target.value)} name='' id=''>
        {data.map((dt, i) => (
          <option value={dt} key={i}>{dt}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
