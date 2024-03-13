//функция сохранения файла
function writeFile(name, value, type = 'text/plain') {
  let val = value;
  if (value === undefined) {
    val = '';
  }
  //   console.log(val);
  const download = document.createElement('a');
  download.href =
    `data:${type};content-disposition=attachment;filename=file,` + val;
  download.download = name;
  download.style.display = 'none';
  download.id = 'download';
  document.body.appendChild(download);
  document.getElementById('download').click();
  document.body.removeChild(download);
}

//сконвертировать txt данные для скачивания
const convertTxtData = (data) => {
  let dataValue = '';
  data.forEach((e) => {
    let pointCoord = e.lat + ',' + e.long + '\n';
    dataValue += pointCoord;
  });
  return dataValue;
};

//скопировать значение файла
const copyTextValue = (data) => {
  navigator.clipboard.writeText(data);
};

//скачать выбранный файл
const downloadFile = (fileDescription, data, type) => {
  let getName = prompt(`введите имя ${fileDescription}`);

  if (type === 'file/kml') {
    getName += '.kml';
  }

  console.log(getName);
  console.log(getName === null);

  getName === null || ''
    ? console.log('cancel download')
    : writeFile(getName, data, type);
};

const getFormat = (checkedString) => {
  let format;
  if (
    checkedString.includes('°') &&
    checkedString.includes(`'`) &&
    checkedString.includes(`"`)
  ) {
    format = `DD°MM'SS`;
  } else if (checkedString.includes('°') && checkedString.includes(`'`)) {
    format = `DD°MMMM`;
  } else {
    format = `DD.DDDD`;
  }
  return format;
};

const getDivider = (checkedString) => {
  let divider;
  let error;

  if (checkedString.includes(',')) {
    divider = `,`;
  } else if (checkedString.includes(';')) {
    divider = `;`;
  } else if (checkedString.includes(' ')) {
    divider = `пробел`;
  } else {
    error = 'проверьте разделитель';
  }

  console.log(error);
  return divider;
};

const getFileInfo = (checkedString) => {
  let fileInfo = {
    type: '',
    format: '',
    divider: '',
    error: '',
  };

  if (
    checkedString.includes('°') &&
    checkedString.includes(`'`) &&
    checkedString.includes(`"`)
  ) {
    fileInfo.format = `DD°MM'SS`;
  } else if (checkedString.includes('°') && checkedString.includes(`'`)) {
    fileInfo.format = `DD°MMMM`;
  } else if (checkedString.includes('.')) {
    fileInfo.format = `DD.DDDD`;
  } else {
    fileInfo.error = 'проверьте формат';
  }

  if (checkedString.includes(',')) {
    fileInfo.divider = `,`;
  } else if (checkedString.includes(';')) {
    fileInfo.divider = `;`;
  } else if (checkedString.includes(' ')) {
    fileInfo.divider = `пробел`;
  } else {
    fileInfo.error = 'проверьте разделитель';
  }

  return fileInfo;
};

export {
  writeFile,
  downloadFile,
  copyTextValue,
  convertTxtData,
  getFormat,
  getDivider,
  getFileInfo,
};
