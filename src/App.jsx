import React, { useState } from 'react';

import MainTable from './components/mainTable';
import ProjectHeader from './components/projectHeader';
import AboutContainer from './components/aboutContainer';
import LeafletMap from './components/leafletMap';

// import { kmlPointsEntry, kmlTrackEntry } from './utils/kmlIntro';
import { getFileInfo } from './utils/utils';
import InfoContainer from './components/infoContainer';
import ButtonsContainer from './components/buttonsContainer';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [loadedFileName, setLoadedFileName] = useState('');

  //file info
  const [fileInfo, setFileInfo] = useState({
    type: '',
    format: '',
    divider: '',
    error: '',
  });

  //table data
  const [dataDD, setDataDD] = useState([]);
  const [dataDMM, setDataDMM] = useState([]);
  const [dataDMS, setDataDMS] = useState([]);
  const [tableData, setTableData] = useState([]);

  //markers data
  const [markerData, setMarkerData] = useState([]);
  const [mapContainerSettings, setMapContainerSettings] = useState({
    center: [56.483975, 84.956919],
    zoom: 13,
  });

  let initialFormData = [];
  let arrDD = [];
  let arrDMM = [];
  let arrDMS = [];

  //отслеживание изменения textarea
  const handleChange = (e) => {
    setInputValue(e.target.value);
    initialFormData = e.target.value.trim().replaceAll(`\r`, '').split(`\n`);
    let checkedString = initialFormData[0];

    if (checkedString) {
      setFileInfo({
        ...fileInfo,
        format: getFileInfo(checkedString).format,
        divider: getFileInfo(checkedString).divider,
        error: getFileInfo(checkedString).error,
      });
    }
  };

  //загрузка файла
  const fileLoader = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      let currentTextareaValue = event.target.result;
      setInputValue(currentTextareaValue);

      let checkedString = currentTextareaValue
        .trim()
        .replaceAll(`\r`, '')
        .split(`\n`)[0];

      if (checkedString) {
        setFileInfo({
          ...fileInfo,
          format: getFileInfo(checkedString).format,
          divider: getFileInfo(checkedString).divider,
          error: getFileInfo(checkedString).error,
        });
      }
    };
    console.log('загружаю файл', file.name);
    setLoadedFileName(file.name);
    reader.readAsText(file);
  };

  //очистка содержимого
  const inputClear = () => {
    setInputValue('');
    setFileInfo({
      type: '',
      format: '',
      divider: '',
      error: '',
    });

    setDataDD([]);
    setDataDMM([]);
    setDataDMS([]);
    setMarkerData([]);
    setLoadedFileName('');
    setMapContainerSettings({
      center: [56.483975, 84.956919],
      zoom: 13,
    });
    setTableData([]);

    // file = ''
    //   setTableData([]);
    //   showOnMap([]);

    // console.log(reader);
    // setConvertedData('');
    // setFileLoaded(false);
    // setFileChecked(false);
    console.log('данные очищены');
    // window.location.reload(false);
  };

  //отображение маркеров
  function showOnMap(markerData) {
    let markers = [];
    let markerObject = {};
    if (markerData.length > 0) {
      markerData.forEach((e) => {
        markerObject = {
          geocode: [Number(e.lat), Number(e.long)],
          popup: e.lat + ' ' + e.long,
          key: e.lat + ' ' + e.long,
        };
        markers.push(markerObject);
      });
    }
    setMarkerData(markers);
    console.log('маркеры отображены');

    setMapContainerSettings({
      center: markers[Math.ceil(markers.length / 2)].geocode,
      zoom: 14,
    });
  }

  //проверка файла
  const convertData = () => {
    if (inputValue) {
      initialFormData = inputValue.trim().replaceAll(`\r`, '').split(`\n`);
      console.log('проверяю файл');
      let valueDivider = fileInfo.divider;

      //определение формата
      let dataFormat = '';
      let latDegreeIndex = '';
      let latMinuteIndex = '';
      let longDegreeIndex = '';
      let longMinuteIndex = '';

      initialFormData.forEach((elem) => {
        if (elem.includes('°') && elem.includes(`'`) && elem.includes(`"`)) {
          dataFormat = `DD°MM'SS`;
          latDegreeIndex = elem.split(valueDivider)[0].indexOf(`°`);
          latMinuteIndex = elem.split(valueDivider)[0].indexOf(`'`);
          longDegreeIndex = elem.split(valueDivider)[1].indexOf(`°`);
          longMinuteIndex = elem.split(valueDivider)[1].indexOf(`'`);
        } else if (elem.includes('°') && elem.includes(`'`)) {
          dataFormat = `DD°MMMM`;
          latDegreeIndex = elem.split(valueDivider)[0].indexOf(`°`);
          latMinuteIndex = elem.split(valueDivider)[0].indexOf(`'`);
          longDegreeIndex = elem.split(valueDivider)[1].indexOf(`°`);
          longMinuteIndex = elem.split(valueDivider)[1].indexOf(`'`);
        } else if (elem.includes('.')) {
          dataFormat = `DD.DDDD`;
          latDegreeIndex = elem.split(valueDivider)[0].indexOf(`.`);
          longDegreeIndex = elem.split(valueDivider)[1].indexOf(`.`);
        } else {
          console.log('error data format');
        }
      });

      //   console.log('dataFormat', dataFormat, latDegreeIndex, longDegreeIndex);

      //обработка данных
      initialFormData.forEach((elem) => {
        let iteratedString = elem.split(valueDivider);
        //lat, long
        let currentLat = iteratedString[0];
        let currentLong = iteratedString[1];
        let latA = '';
        let latB = '';
        let latC = '';
        let latMM = '';
        let longA = '';
        let longB = '';
        let longC = '';
        let longMM = '';
        let finalLatDD = '';
        let finalLatDMM = '';
        let finalLatDMS = '';
        let finalLongDD = '';
        let finalLongDMM = '';
        let finalLongDMS = '';
        let latDotIndexDmm = '';
        let longDotIndexDmm = '';
        let latDotIndexDms = '';
        let longDotIndexDms = '';

        if (dataFormat === `DD°MM'SS`) {
          latA = currentLat.slice(0, latDegreeIndex);
          latB = currentLat.slice(latDegreeIndex + 1, latMinuteIndex);
          latC = currentLat.slice(latMinuteIndex + 1, currentLat.length - 1);
          longA = currentLong.slice(0, longDegreeIndex);
          longB = currentLong.slice(longDegreeIndex + 1, longMinuteIndex);
          longC = currentLong.slice(
            longMinuteIndex + 1,
            currentLong.length - 1
          );

          finalLatDD =
            latA.toString() +
            (+latB / 60 + latC / 3600).toFixed(5).toString().slice(1);

          finalLatDMM =
            latA.toString() + '°' + (+latB + latC / 60).toFixed(4) + `'`;

          finalLatDMS = currentLat;

          finalLongDD =
            longA.toString() +
            (+longB / 60 + longC / 3600).toFixed(5).toString().slice(1);

          finalLongDMM =
            longA.toString() + '°' + (+longB + longC / 60).toFixed(4) + `'`;
          finalLongDMS = currentLong;
        } else if (dataFormat === `DD°MMMM`) {
          latA = currentLat.slice(0, latDegreeIndex);
          latDotIndexDmm = currentLat.indexOf('.');
          latB = currentLat.slice(latDegreeIndex + 1, latDotIndexDmm);
          latC = currentLat.slice(latDotIndexDmm + 1, currentLat.length - 1);
          latMM = currentLat.slice(latDegreeIndex + 1, currentLat.length - 1);
          longA = currentLong.slice(0, longDegreeIndex);
          longDotIndexDmm = currentLong.indexOf('.');
          longB = currentLong.slice(longDegreeIndex + 1, longDotIndexDmm);
          longC = currentLong.slice(
            longDotIndexDmm + 1,
            currentLong.length - 1
          );
          longMM = currentLong.slice(
            longDegreeIndex + 1,
            currentLong.length - 1
          );
          finalLatDD = latA + '.' + (latMM / 0.0006).toFixed(0);
          finalLatDMM = currentLat;
          finalLatDMS =
            latA + '°' + latB + `'` + (Number(latC) * 0.006).toFixed(2) + `"`;

          finalLongDD = longA + `.` + (longMM / 0.0006).toFixed(0);
          finalLongDMM = currentLong;
          finalLongDMS =
            longA +
            '°' +
            longB +
            `'` +
            (Number(longC) * 0.006).toFixed(2) +
            `"`;
        } else if (dataFormat === `DD.DDDD`) {
          latA = currentLat.slice(0, latDegreeIndex);
          latMM = currentLat.slice(latDegreeIndex, currentLat.length);
          longA = currentLong.slice(0, longDegreeIndex);
          longMM = currentLong.slice(longDegreeIndex, currentLong.length);
          finalLatDD = currentLat;
          finalLatDMM =
            latA.toString() + '°' + (Number(latMM) * 60).toFixed(6) + `'`;
          latDotIndexDms = finalLatDMM.indexOf('.');
          finalLatDMS =
            finalLatDMM.slice(0, latDotIndexDms) +
            `'` +
            (
              finalLatDMM.slice(latDotIndexDms + 1, finalLatDMM.length - 1) *
              0.00006
            ).toFixed(2) +
            `"`;
          finalLatDMM =
            latA.toString() + '°' + (Number(latMM) * 60).toFixed(4) + `'`;
          finalLongDD = currentLong;
          finalLongDMM =
            longA.toString() + '°' + (Number(longMM) * 60).toFixed(6) + `'`;
          longDotIndexDms = finalLongDMM.indexOf('.');
          finalLongDMS =
            finalLongDMM.slice(0, longDotIndexDms) +
            `'` +
            (
              finalLongDMM.slice(longDotIndexDms + 1, finalLongDMM.length - 1) *
              0.00006
            ).toFixed(2) +
            `"`;
          finalLongDMM =
            longA.toString() + '°' + (Number(longMM) * 60).toFixed(4) + `'`;
        } else {
          console.log('incorrectDataFormat');
        }

        arrDD.push({ lat: finalLatDD, long: finalLongDD });
        arrDMM.push({ lat: finalLatDMM, long: finalLongDMM });
        arrDMS.push({ lat: finalLatDMS, long: finalLongDMS });
      });

      setDataDD(arrDD);
      setDataDMM(arrDMM);
      setDataDMS(arrDMS);
      setTableData([arrDD, arrDMM, arrDMS]);
      showOnMap(arrDD);
    } else {
      console.log('вставьте данные');
    }
  };

  return (
    <>
      <ProjectHeader data='GNSS data editor' />

      <form action='' id='form'>
        <div className='inputContainer p-2'>
          <div className='border rounded p-2 textAreaContainer'>
            <textarea
              className='form-control p-1'
              id='inputText'
              name='inputText'
              placeholder='>>вставь данные сюда или выбери текстовый файл<<'
              rows='10'
              value={inputValue}
              onChange={handleChange}
            ></textarea>
          </div>


          <div className='controlContainer ms-0'>
            <InfoContainer fileInfo={fileInfo} fileName={loadedFileName} />
            <ButtonsContainer
              fileLoader={fileLoader}
              convertData={convertData}
              dataDD={dataDD}
              inputClear={inputClear}
            />
              <AboutContainer />
          </div>

          <LeafletMap
            markers={markerData}
            markerCenter={mapContainerSettings}
          />
        </div>
      </form>

      {tableData.length > 0 && (
        <MainTable
          tableData={tableData}
          dataDD={dataDD}
          dataDMM={dataDMM}
          dataDMS={dataDMS}
        />
      )}
    </>
  );
};

export default App;
