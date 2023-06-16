// The purpose of this component is to provide an analogue for the
// actual PDF, where the user can drag and drop text fields. This will
// allow the user some control over text-field placement on the actual certs, 
// which makes this tool generally more useful. 

export default function Customizer(props: any) {

  function handleNameSlider(event: any) {
    props.setNameTop(event.target.value);
  }

  function handleDateSlider(event: any) {
    props.setDateTop(event.target.value);
  }

  return (
    <div className='flex flex-col'>
      <div className='h-full w-full mt-10'>

        <h1 id='pdf-preview-title' className='text-center rounded-lg text-zinc-800 p-3 font-bold text-3xl
        h-[60px] w-[200px] m-auto'>PDF Preview</h1>

        <div id='pdf-preview' className='h-[400px] w-[576px] bg-zinc-300 border-4 border-zinc-800 
        m-auto bg-no-repeat bg-center bg-cover overflow-hidden' style={{
            backgroundImage: `url(${props.bg})`
          }}>
          <p className='relative w-full text-center h-[0px]' style={{top: `${props.tops[0]}%`}}>&lt;NAME&gt;</p>
          <p className='relative w-full text-center h-[0px]' style={{top: `${props.tops[1]}%`}}>&lt;DATE&gt;</p>
        </div>
      </div>

      <div className='flex justify-center'>
        <label htmlFor={'name-vert'}>Adjust name vertical placement</label>
        <input name='name-vet' className='w-[200px] my-[5px]' type={'range'}
          value={props.tops[0]} onChange={handleNameSlider}></input>
      </div>

      <div className='flex justify-center'>
        <label htmlFor={'date-vert'}>Adjust date vertical placement</label>
        <input name='date-vet' className='w-[200px] my-[5px]' type={'range'}
          value={props.tops[1]} onChange={handleDateSlider}></input>
      </div>

    </div>
  );
}
