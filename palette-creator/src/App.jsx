import { useState, resolve } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Color from 'color-thief-react';



function App() {
  const [count, setCount] = useState(0)
  const [image, setImage] = useState("https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630");

  return (
    <>
       <Color src={image}  crossOrigin="anonymous" format="hex">
        {({ data, loading, error }) => (
          <div style={{ color: data }}>
            Text with the predominant color {data}
          </div>
        )}
        </Color>
    </>
  )
}

export default App
