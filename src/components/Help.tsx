import { useState, useRef, useEffect } from 'react';

export default function HelpScreen(props: any) {
  const [orientation, setOrientation] = useState('landscape');
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <dialog ref={dialogRef} className='w-1/2 max-w-[650px] text-zinc-900'>
      <div className='m-5'>
        <h1 className='font-bold text-3xl text-center pdf-preview-title'>What is This?</h1>
        <p>A fast way to produce lots of PDFs with different text values
          in the same position (think Adobe's Data Merge).
          <br />
          Using this tool you can quickly and easily produce certificates of
          achievement or other such documents using only a single background
          image and a spreadsheet of names and subtitles.
        </p>
      </div>

      <div className='m-5'>
        <h1 className='font-bold text-3xl text-center pdf-preview-title'>How to Use</h1>
        <ul className='list-decimal'>
          <li>Upload a background image (must be jpeg, png, or svg)</li>
          <li>
            Upload a <a className='underline text-yellow-500' href='https://en.wikipedia.org/wiki/Comma-separated_values'>CSV</a> file
            with columns <b>"Name"</b> and <b>"Subtitle"</b>. Note, if the text itself
            contains commas, be sure they're wrapped in double quotes, e.g. "June, 2023".
          </li>
          <li>Adjust the vertical position of the Name and Subtitle fields using the
            preview window and sliders</li>
          <li>When you're satisfied with the layout, press <b>Generate PDF</b></li>
          <li>Download your PDF!</li>
        </ul>
      </div>

      <form method={'dialog'}>
        <button className='bg-yellow-500 text-zinc-800 p-3 font-bold 
        h-[50px] m-[15px] flex yellow-btn m-auto'>
          Ok!
        </button>
      </form>
    </dialog>
  );
}
