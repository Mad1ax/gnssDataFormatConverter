const InfoContainer = ({ fileInfo, fileName }) => {

  return (
    <>
      <div className='p-2 border rounded ms-2 mb-2 infoContainer'>
        <h6>Информация о загруженных данных</h6>

        <ol className='list-group'>
          {fileName && (
            <li className='list-group-item p-1'>файл: {fileName}</li>
          )}
          {fileInfo.error ? (
            <li className='list-group-item p-1'>
              Ошибка! <br />
              {fileInfo.error}
            </li>
          ) : (
            <>
              <li className='list-group-item p-1'>формат: {fileInfo.format}</li>
              <li className='list-group-item p-1'>
                разделитель: {fileInfo.divider}
              </li>
            </>
          )}
        </ol>
      </div>
    </>
  );
};

export default InfoContainer;
