import { useState } from 'react';
import AddImg from '../assets/add_photo_alternate_white_24dp.svg';
import Magic from '../assets/auto_awesome_black_24dp.svg';

export default function Controls(props: any) {
  const [orientation, setOrientation] = useState('landscape');

  return (
    <div className='w-full h-[75px] bg-zinc-300 border-t-4 border-t-zinc-800 
      flex flex-row items-center justify-between'>
      <button className='rounded-lg bg-green-500 text-white p-3 font-bold 
        h-[50px] m-[15px] flex' onClick={props.upload}>
        Upload Background
        <img className='ml-[5px]' src={AddImg}></img>
      </button>

      <button className='rounded-lg bg-yellow-500 text-zinc-800 p-3 font-bold 
        h-[50px] m-[15px] flex' onClick={props.show}>
        Generate PDF
        <img className='ml-[5px]' src={Magic}></img>
      </button>
    </div>
  );
}
