// import ButtonsContainer from './buttonsContainer';
import React, { useState } from 'react';

const FormBody = ({ convert, formInputValue, onChangeData }) => {
  //   const checkData = () => {
  //     // console.log('initial', formInputValue);
  //     // console.log('replaced', formInputValue.replace(/[a-zа-яё]/gi, '').split(`\n`));
  // 	initialFormData = formInputValue.replace(/[a-zа-яё]/gi, '').split(`\n`)

  //     // initialFormData = formInputValue.trim().split(`\n`);
  //     // console.log('проверяю файл...');
  //     console.log(initialFormData);

  //     initialFormData.forEach((elem)=>{
  // 		console.log(elem);
  // 		if (elem.includes(' ')) {console.log('space');}
  // 		if (elem.includes(`,`)) {setDivider(',')}
  // 		else if (elem.includes(' ')) {setDivider(' ')}
  //     })
  //   };

  return (
    <form action='' id='form'>
      <div className='inputContainer p-2'>
        <textarea
          className='form-control'
          id='inputText'
          name='inputText'
          placeholder='>>вставь данные сюда или выбери текстовый файл<<'
          rows='10'
          value={formInputValue}
          onChange={onChangeData}
        ></textarea>

        <div className=' buttonContainer p-2'>
          <div className='spanContainer'>
            <label className='input-file'>
              <input
                type='file'
                className='form-control'
                id='inputGroupFile04'
                aria-describedby='inputGroupFileAddon04'
                // onChange={fileLoader}
                aria-label='Upload'
                onClick={() => console.log('input data')}
              />
              <span id='spanButton' className='bg-primary'>
                выбрать файл
              </span>
            </label>
          </div>

          {/* {isFileLoaded && (
                <div className='font-weight-bold'>
                  загружен {loadedFileName}
                </div>
              )} */}

          <button
            className='btn btn-primary m-2 border-secondary'
            id='func-buttons'
            type='button'
            onClick={convert}
            // onClick={firstDataChecker}
          >
            обработать данные
          </button>

          {/* <button
            className='btn btn-primary m-2 border-secondary'
            id='func-buttons'
            type='button'
            onClick={checkData}
            // onClick={firstDataChecker}
          >
            проверить данные
          </button> */}

          {/* {isFileChecked && (
                <div className='font-weight-bold'>
                  {checkedFileName} файл проверен
                </div>
              )} */}

          {/* <button
            className='btn btn-primary m-2 border-secondary'
            id='func-buttons'
            type='button'
            onClick={() => console.log('convert')}
            // onClick={downloadData}
          >
            конвертировать
          </button> */}

          <button
            className='btn btn-success m-2 border-secondary'
            id='func-buttons'
            type='button'
            onClick={() => console.log('dwnld data')}
            // onClick={downloadData}
          >
            скачать готовый трэк
          </button>

          <button
            className='btn btn-info m-2 border-secondary'
            type='button'
            id='func-buttons'
            onClick={() => console.log('clear data')}
            // onClick={inputClear}
          >
            очистить данные
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormBody;
