/**
* Top level component.
*/

import { useState, useRef } from 'react';
import Certificate from './Certificate';
import Controls from './Controls';

import GridImg from '../assets/grid.jpg';
import Customizer from './Customizer';
import CsvViewer from './CsvViewer';

export default function App() {
  const [bgImg, setBgImg] = useState(GridImg);
  const [csv, setCsv] = useState('');
  const [showPdf, setShowPdf] = useState(false);

  const imgUploadRef = useRef<HTMLInputElement>(null);
  const csvUploadRef = useRef<HTMLInputElement>(null);

  function handleRequestUpload(uploadType: string) {
    // Pull up the file upload window
    if (imgUploadRef.current != undefined && uploadType == 'image') {
      imgUploadRef.current.click();
    } else if (csvUploadRef.current != undefined && uploadType == 'csv') {
      csvUploadRef.current.click();
    }
  }

  async function handleFileUpload(e: any) {
    if (e.target.value == '') return;

    if (e.target.files[0].type.includes('image')) {
      setBgImg(URL.createObjectURL(e.target.files[0]));
    } else if (e.target.files[0].type == 'text/csv') {
      let blob = await fetch(URL.createObjectURL(e.target.files[0])).then(r => r.blob());
      let csvData = await blob.text().then(data => data);
      setCsv(csvData);
    };
  }

  function handleShowPdf() {
    setShowPdf(!showPdf);
  }

  return (
    <>
      <div className='w-full flex flex-col justify-between h-full'>
        <h1 id='header-zone' className='text-2xl font-bold text-zinc-900 border-b-4 border-zinc-800 p-5'>
          Basic React App (TypeScript, Tailwind, Webpack)
        </h1>

        {showPdf ? <Certificate bg={bgImg} /> : <Customizer bg={bgImg}></Customizer>}
        {csv !== '' ? <CsvViewer csv={csv} /> : ''}

        <Controls upload={handleRequestUpload} show={handleShowPdf} />

      </div>

      <input className='hidden' ref={imgUploadRef} type='file' accept='image/*' onChange={handleFileUpload} />
      <input className='hidden' ref={csvUploadRef} type='file' accept='text/csv' onChange={handleFileUpload} />
    </>
  );
}
