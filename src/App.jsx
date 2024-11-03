import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
//gap working when i am using flex
function App() {
  return (
    <div className='flex gap-5'>   
    <Card name='oreo' img='https://images.pexels.com/photos/6932125/pexels-photo-6932125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    <Card name='hitesh'  img='https://media.istockphoto.com/id/863655882/photo/sadhu-indian-holymen-sitting-in-the-temple.jpg?s=1024x1024&w=is&k=20&c=OQbmyTlRkEpA7oz1--fYcS_IB2CmJe1SdDbALy0alDU='/>
    <Card name='Ritesh'  img='https://images.pexels.com/photos/6806465/pexels-photo-6806465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      </div>
  )
}

export default App
