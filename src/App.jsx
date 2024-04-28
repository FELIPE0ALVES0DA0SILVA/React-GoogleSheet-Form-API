import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'

function App() {
  // https://script.google.com/macros/s/AKfycbyb28HuQQALVwFnLy7ZOGY_j288cf8yuvArKVeewescqr6vd4MzGDkU9k1QSn47fVAiYg/exec

  const submit = (e) => {
    const formElement = document.querySelector('form')
    e.preventDefault()
    console.log('Submitted')

    const formData = new FormData(formElement)

    fetch("https://script.google.com/macros/s/AKfycbyb28HuQQALVwFnLy7ZOGY_j288cf8yuvArKVeewescqr6vd4MzGDkU9k1QSn47fVAiYg/exec", {
      method: "POST",
      body: formData
    }).then((res) => res.json()).then((data) => {
      console.log(data)
    }).catch((error) => console.log(error))
  }

  return (
    <div>
      <h1>Contact Me Form</h1>
      <h2>Start editing to see some magic happening</h2>
      <form className='form' onSubmit={(e) => submit(e)}>
        <input placeholder='Name' name='Name' type='text'></input>
        <input placeholder='Phone' name='Phone' type='text'></input>
        <input placeholder='Subject' name='Subject' type='text'></input>
        <input placeholder='Email' name='Email' type='email'></input>
        <input type="submit" className='button'/>
      </form>

    </div>
  )
}

export default App
