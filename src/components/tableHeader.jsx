import { useState, useEffect } from 'react';
import {
  downloadFile,
  copyTextValue,
  convertTxtData,
} from '../utils/utils';

const TableHeader = ({ headerName, data }) => {
  const [popUpText, setPopUpText] = useState({status: false, value: ''});

  //удаление текста "скопирован, скачан"
  useEffect(() => {
    let timer1 = setTimeout(() => setPopUpText({status:false}), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, [popUpText]);

  return (
    <thead>
      <tr>
        <th colSpan='2'>
          <div className='d-flex justify-content-between'>
            <div className='m-auto'>
              <div className='d-flex'>
                <div>{headerName} </div>
                <div>
                  {popUpText.status && (
                    <div className='ms-5 text-success'>{popUpText.value}</div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                className='btn btn-sm btn-success border-secondary ms-1'
                onClick={() =>{
                  downloadFile(
                    `.txt файла формата ${headerName}`,
                    convertTxtData(data),
                    'text/plain'
                  );setPopUpText({status:true,value:'файл скачан'})}
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-download'
                  viewBox='0 0 16 16'
                >
                  <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5' />
                  <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z' />
                </svg>
              </button>

              <button
                className='btn btn-sm btn-warning border-secondary  ms-1'
                onClick={() => {copyTextValue(convertTxtData(data));
                setPopUpText({status:true, value:'данные скопированы'})}}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-copy'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
