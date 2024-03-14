import React, { useState } from 'react';

const AboutContainer = () => {
  const [collapsedBlock, setCollapsedBlock] = useState(true);

  let classes;
  const getClasses = () => {
    collapsedBlock
      ? (classes = 'card-body collapse')
      : (classes = 'card-body p-2');
    return classes;
  };

  return (
    <>
      <div className='aboutContainerContainer mt-2'>
        <div id='accordion'>
          <div className='card p-0 border rounded ms-2 text-center'>
            <h5 className='mb-0'>
              <button
                className='btn btn-link text-center'
                data-toggle='collapse'
                data-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
                onClick={() => setCollapsedBlock((bool) => !bool)}
                type='button'
              >
                <span className='fw-bold text-center'>Справка</span>
              </button>
            </h5>

            <div
              id='collapseOne'
              className='collapse show'
              aria-labelledby='headingOne'
              data-parent='#accordion'
            >
              <div className={getClasses()} id='collapseTarget'>
                <ol className='list-group text-start p-0'>
                  <li className='list-group-item p-1 '>
                    сервис позволяет конвертировать форматы географических
                    координат
                  </li>
                  <li className='list-group-item p-1'>
                    поддерживаемые форматы: DD.DDDD, DD°MMMM, DD°MM'SS"
                  </li>
                  <li className='list-group-item p-1'>
                    поддерживаемые разделители: ',' ';'
                  </li>
                  <li className='list-group-item p-1'>
                    пример: 59.19832,37.16498
                  </li>
                  <li className='list-group-item p-1'>
                    <a className='ms-1' href='mailto: bml@indorsoft.ru'>
                      bml@indorsoft.ru
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
