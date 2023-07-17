// The purpose of this component is to provide an analogue for the
// actual PDF, where the user can drag and drop text fields. This will
// allow the user some control over text-field placement on the actual certs, 
// which makes this tool generally more useful. 

export default function Customizer(props: any) {

  return (
    <div className='flex flex-col'>
      <div className='h-full w-full mt-10'>

        <h1 id='' className='text-center rounded-lg text-zinc-800 p-3 font-bold text-3xl
        pdf-preview-title h-[60px] w-[200px] m-auto'>PDF Preview</h1>

        <div id='pdf-preview' className='h-[400px] w-[576px] bg-zinc-300 border-4 border-zinc-800 
        m-auto bg-no-repeat bg-center bg-cover overflow-hidden' style={{
            backgroundImage: `url(${props.bg})`
          }}>
          <p className='relative w-full text-center h-[0px]' style={{ top: `${props.tops[0]}%` }}>&lt;NAME&gt;</p>
          <p className='relative w-full text-center h-[0px]' style={{ top: `${props.tops[1]}%` }}>&lt;SUBTITLE&gt;</p>
        </div>
      </div>

      <div className='constrained'>
        <div className='flex justify-between my-5 constrained'>
          <label htmlFor={'name-vert'} className='font-mono'>Adjust name vertical placement</label>
          <input name='name-vet' className='range w-[200px] my-[5px] ml-[15px] h-2 bg-zinc-800 
          rounded-lg appearance-none dark:bg-gray-700' type={'range'}
            value={props.tops[0]} onChange={(e)=> props.setNameTop(e.target.value)}></input>
        </div>

        <div className='flex justify-between my-5 constrained'>
          <label htmlFor={'subtitle-vert'} className='font-mono'>Adjust subtitle vertical placement</label>
          <input name='subtitle-vet' className='range w-[200px] my-[5px] ml-[15px] h-2 bg-zinc-800 
          rounded-lg appearance-none dark:bg-gray-700' type={'range'}
            value={props.tops[1]} onChange={(e)=> props.setSubtitleTop(e.target.value)}></input>
        </div>

        <div className='flex justify-between my-5 constrained items-center '>
          <label htmlFor={'subtitle-vert'} className='font-mono'>Change font</label>
          <select name='subtitle-vet' className='w-[200px] my-[5px] border-zinc-800 
          ml-[15px] p-[3px] border-2 range'
            value={props.font} onChange={(e)=> props.setFont(e.target.value)}>
            <option value={'Bebas Neue'}>Bebas Neue (sans-serif)</option>
            <option value={'Roboto'}>Roboto (sans-serif)</option>
            <option value={'Merriweather'}>Merriweather (serif)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
