import { useState } from 'react';

export default function Controls(props: any) {
  const [orientation, setOrientation] = useState('landscape');

  return (
    <div className='w-full h-[75px] bg-zinc-300 border-t-4 border-t-zinc-800 
      flex flex-row items-center'>
      <button className='rounded-lg bg-green-500 text-white p-3 font-bold 
        h-[50px] m-[15px]' onClick={props.upload}>
        Upload Background</button>

      <button className='rounded-lg bg-yellow-500 text-zinc-800 p-3 font-bold 
        h-[50px] m-[15px]' onClick={props.show}>
        Generate PDF</button>
    </div>
  );
}
