import { useState } from 'react';
import AddImg from '../assets/add_photo_alternate_white_24dp.svg';
import Magic from '../assets/auto_awesome_black_24dp.svg';

// The purpose of this component is to provide an analogue for the
// actual PDF, where the user can drag and drop text fields. This will
// allow the user some control over text-field placement on the actual certs, 
// which makes this tool generally more useful. 

export default function Customizer(props: any) {
  const [orientation, setOrientation] = useState('landscape');

  return (
    <div className='h-full w-full mt-10'>
      <div className='h-[400px] w-[576px] bg-zinc-300 border-4 border-zinc-800 
        m-auto bg-no-repeat bg-center bg-contain' style={{
          backgroundImage: `url(${props.bg})`
        }}>
        {/* 
        TODO: This div should have the same aspect ratio as a sheet of A4
        */}
      </div>
      {/* TODO: add drag-and-drop functionality */}
    </div>
  );
}
