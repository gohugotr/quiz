import React, { useState } from 'react'
import Dropdown from '../../components/dropdown/Dropdown'

const Introduce = () => {
  const difficulty = ['easy', 'medium', 'hard']
  const [difficultyChange, setdifficultyChange] = useState('')
  console.log(difficultyChange, 'difficultyChange')
  return (
    <div className='introduce'>
      <div className='introduce-container'>
        <img
          className='introduce-logo'
          src='./logo-quiz.png'
          width={210}
          height={210}
          alt='Logo Quiz'
        />
        <Dropdown data={difficulty} setdifficultyChange={setdifficultyChange} />
        <div className='introduce-btn'>Quiz'e Başla</div>
      </div>
    </div>
  )
}

export default Introduce
