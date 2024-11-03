import React from 'react'
//object fill work when u use width and height
const Card = ({name,img}) => {
  return (
    <div className='w-96 h-52 bg-slate-400 rounded-lg shadow-lg object-fill'>
hello my name is
      {name}
      <img src={img} className='w-full h-full  object-fill'/>
    </div>
  )
}

export default Card
