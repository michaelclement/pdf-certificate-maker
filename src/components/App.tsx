/**
* Top level component.
*/

import { useState, useRef } from 'react';
import Certificate from './Certificate';
import Controls from './Controls';

import GridImg from '../assets/grid.jpg';
import Customizer from './Customizer';

export default function App() {
  const [userId, setUserId] = useState(1); // Example state
  const [bgImg, setBgImg] = useState(GridImg); // Example state
  const [showPdf, setShowPdf] = useState(false);

  const uploadRef = useRef<HTMLInputElement>(null);

  function handleRequestUpload() {
    // Pull up the file upload window
    if (uploadRef.current != undefined) {
      uploadRef.current.click();
    }
  }

  function handleImgUpload(e: any) {
    // Update the PDF background image to whatever the user
    // uploaded.
    setBgImg(URL.createObjectURL(e.target.files[0]));
  }

  function handleShowPdf() {
    setShowPdf(!showPdf);
  }

  return (
    <>
      <div className='w-full flex flex-col justify-between h-full'>
        <h1 className='text-2xl font-bold text-zinc-900 border-b-4 border-zinc-800 p-5'>
          Basic React App (TypeScript, Tailwind, Webpack)
        </h1>

        {showPdf ? <Certificate bg={bgImg} /> : <Customizer bg={bgImg}></Customizer>}

        <Controls upload={handleRequestUpload} show={handleShowPdf}/>

      </div>

      <input className='hidden' ref={uploadRef} type='file' accept='image/*' onChange={handleImgUpload} />
    </>
  );
}
