import { kmlPointsEntry, kmlTrackEntry } from "../utils/kmlIntro";
import { downloadFile } from "../utils/utils";

const ButtonsContainer = ({ fileLoader, dataProcessing, dataDD, inputClear }) => {
  return (
    <div className=' buttonContainer p-2 border rounded ms-2'>
      <label className='input-file'>
        <input
          type='file'
          className='form-control'
          id='inputGroupFile04'
          aria-describedby='inputGroupFileAddon04'
          onChange={fileLoader}
          aria-label='Upload'
        />
        <span id='spanButton' className='bg-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-upload float-start mt-1 ms-2'
            viewBox='0 0 16 16'
          >
            <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5' />
            <path d='M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z' />
          </svg>{' '}
          загрузить .txt файл
        </span>
      </label>

      <button
        className='btn btn-info border-secondary'
        id='func-buttons'
        type='button'
        onClick={dataProcessing}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-arrow-right-square float-start mt-1'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z'
          />
        </svg>{' '}
        обработать данные
      </button>

      <button
        className='btn btn-success border-secondary'
        onClick={() =>
          downloadFile(
            'точек в формате .kml',
            kmlPointsEntry(dataDD),
            'file/kml'
          )
        }
        id='downloadKmlButton'
        type='button'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-download float-start mt-1'
          viewBox='0 0 16 16'
        >
          <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5' />
          <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z' />
        </svg>{' '}
        скачать точки .kml
      </button>

      <button
        className='btn btn-success border-secondary'
        onClick={() =>
          downloadFile(
            'трэк-файла в формате .kml',
            kmlTrackEntry(dataDD),
            'file/kml'
          )
        }
        id='downloadKmlButton'
        type='button'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-download float-start mt-1'
          viewBox='0 0 16 16'
        >
          <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5' />
          <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z' />
        </svg>{' '}
        скачать track .kml
      </button>

      <button
        className='btn btn-danger border-secondary m-0'
        type='button'
        id='func-buttons'
        onClick={inputClear}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-trash float-start mt-1'
          viewBox='0 0 16 16'
        >
          <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z' />
          <path d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z' />
        </svg>{' '}
        <span>очистить данные</span>
      </button>
    </div>
  );
};

export default ButtonsContainer;
