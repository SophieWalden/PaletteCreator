import { useState, resolve } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Palette} from 'color-thief-react';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const Loading = () => <div>Loading...</div>;
function App() {
  const [image, setImage] = useState("https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtNDQ4LXBhaS02NTQuanBn.jpg");
  
  const onDrop = useCallback(acceptedFiles => {
    let reader = new FileReader();
    let file = acceptedFiles[0];

    reader.onloadend = () => {
      setImage(reader.result);
    }

    reader.readAsDataURL(file)
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
  function copyToClipboard(color){
    navigator.clipboard.writeText(color);
  }

  return (
    <div id="container">
        <h3 className="title">Image to Palette Generator</h3>

        <div id="site-container">
          <div id="drag-drop" {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the image here ...</p> :
                <p>Drag 'n' drop some images here, or click to select image</p>
            }
          </div>

        <Palette src={image}  crossOrigin="anonymous" format="hex" colorCount={5}>
          {({ data, loading }) => {
              if (loading) return <Loading />;
              return (
                <div className="color-holder">

                    {data.map((color, index) => (
                      <div onClick={() => copyToClipboard(color)} className="color-display" key={index} style={{ backgroundColor: color }}>
                        <img className="copy-icon" src="https://cdn-icons-png.flaticon.com/512/178/178921.png"></img>
                      </div>
                    ))}
                </div>
              );
            }}
        </Palette>
        </div>
      

    </div>
  )
}

export default App
