import React from 'react'

const PrimaryBtn = ({title , icon , onClick , style }) => {
  return (
    <div>

    <button onClick={onClick} className={`bg-primary text-white py-2 px-4 rounded-md flex items-center justify-center ${style}`}>
      {title}
      {icon && <span className='ml-2'>  <i className= {`text-sm ${icon}`}></i></span>}
    </button>
    </div>

  )
}

export default PrimaryBtn