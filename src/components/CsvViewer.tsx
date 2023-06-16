import { useEffect, useState } from 'react';

export default function CsvViewer(props: any) {
  const [csvRows, setCsvRows] = useState([]);
  const [csvHeaders, setCsvHeaders] = useState([]);

  useEffect(() => {
    // TODO: clean this up when I have two braincells functioning
    let rows = props.csv.split('\n');
    let header = rows[0];
    let cleanHeaders:any = [];
    let rowObj: any = [];
    // Convert string of CSV data into a proper object representation
    rows.slice(1).forEach((el: string, index: number) => {
      let row: any = {}
      header.split(',').forEach((columnName: string, headerIdx: number) => {
        columnName = columnName.trim();
        cleanHeaders.push(columnName);
        if (el != '') {
          row[columnName] = el.split(',')[headerIdx].trim();
        };
      })
      rowObj.push(row);
    });

    setCsvRows(rowObj);
    setCsvHeaders(cleanHeaders);
    props.setDataSource(rowObj);

  }, [props.csv]);

  function createHeaders() {
    if (csvRows[0] == undefined) return <></>

    return Object.keys(csvRows[0]).map(key => {
      return <th key={key}>{key}</th>
    });
  }

  function createBody() {
    if (csvRows[0] == undefined) return <></>

    return csvRows.slice(1).map((row: any, index: number) => {
      return <tr key={`${row}-${index}`} className='w-full'>
        {Object.keys(csvRows[index]).map(key => {
          return <td key={`${key}-${index}`}>{csvRows[index][key]}</td>
        })}
      </tr>;
    });
  }

  return (
    <div className='h-full w-full mt-10'>

      <h1 id='pdf-preview-title' className='text-center rounded-lg text-zinc-800 p-3 font-bold text-3xl
        h-[60px] w-[200px] m-auto'>CSV Data</h1>

      <div id='pdf-preview' className='h-[400px] w-[576px] border-4 border-zinc-800 
        m-auto bg-no-repeat bg-center bg-contain overflow-auto mb-10'>
        <table className='table-fixed w-full text-left'>
          <thead className='w-full'>
            <tr className='w-full'>{createHeaders()}</tr>
          </thead>
          <tbody className='w-full'>
            {createBody()}
          </tbody>
        </table>
      </div>
    </div>
  );
}
