/**
* Top level component.
*/

import { useState, useRef } from 'react';
import Certificate from './Certificate';
import Controls from './Controls';

import GridImg from '../assets/grid.svg';
import Customizer from './Customizer';
import CsvViewer from './CsvViewer';

import HelpIcon from '../assets/help_center_FILL0_wght400_GRAD0_opsz48.svg';
import HelpScreen from './Help';

export default function App() {
  const [bgImg, setBgImg] = useState(GridImg);
  const [csv, setCsv] = useState('');
  const [dataSource, setDataSource] = useState([]);
  const [showPdf, setShowPdf] = useState(false);
  const [nameTopMargin, setNameTopMargin] = useState(35);
  const [subtitleTopMargin, setSubtitleTopMargin] = useState(55);
  const [showHelp, setShowHelp] = useState(false);
  const [font, setFont] = useState('Bebas Neue');

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

  function handleShowHelp() {
    setShowHelp(!showHelp);
  }

  return (
    <>
      <div className='w-full flex flex-col h-full'>
        <h1 id='header-zone' className='text-2xl font-bold text-zinc-900 
          border-b-4 border-zinc-800 p-5 sticky top-0 bg-white z-10 flex justify-between'>
          <span>Bulk PDF Generator</span>

          <button className='bg-zinc-800 text-white font-bold h-[35px] w-[35px] 
            flex green-btn pt-[3px]' onClick={handleShowHelp}>
            <img className='ml-[5px]' src={HelpIcon}></img>
          </button>
        </h1>

        {showPdf ? <Certificate bg={bgImg} dataSource={dataSource}
          tops={[nameTopMargin, subtitleTopMargin]} font={font} /> :
          <div className='pb-[100px]'>
            <Customizer
              bg={bgImg}
              tops={[nameTopMargin, subtitleTopMargin]}
              setNameTop={setNameTopMargin}
              setSubtitleTop={setSubtitleTopMargin}
              setFont={setFont} />
            {csv !== '' && !showPdf ? <CsvViewer csv={csv} setDataSource={setDataSource} /> : ''}
          </div>
        }

        {showHelp ? <HelpScreen /> : ''}

        <div className='fixed bottom-0 w-full'>
          <Controls upload={handleRequestUpload} show={handleShowPdf} showPdf={showPdf} />
        </div>

      </div>

      <input className='hidden' ref={imgUploadRef} type='file' accept='image/*' onChange={handleFileUpload} />
      <input className='hidden' ref={csvUploadRef} type='file' accept='text/csv' onChange={handleFileUpload} />
    </>
  );
}
