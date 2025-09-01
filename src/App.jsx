import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login, { Profile, Settings} from './UserComponent'

function App(){
  return(
    <div>
      <Login />
      <h1>King of fruits</h1>
      <Color/>
      <Fruit/>
      <Profile />
      <Settings />
    </div>
  )

}

function Fruit(){
  return(
    <h2>Mango</h2>
  )
}

function Color(){
  return(
      <h2>I am yellow in color</h2>
  )
}
export default App
