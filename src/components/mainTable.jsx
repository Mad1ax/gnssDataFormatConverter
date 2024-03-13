import TableHeader from './tableHeader';

const MainTable = ({ dataDD, dataDMM, dataDMS }) => {

  return (
    <div className='d-flex mainTable'>
      <table className='table table-bordered m-2'>
        <TableHeader
          headerName={`DD.DDDD`}
          data={dataDD}
        />

        <tbody>
          {dataDD.map((row) => (
            <tr key={row.lat + row.long}>
              <td>{row.lat}</td>
              <td>{row.long}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className='table table-bordered m-2 secondaryTable'>
        <TableHeader headerName={`DD°MMMM`} data={dataDMM} />

        <tbody>
          {dataDMM.map((row) => (
            <tr key={row.lat + row.long}>
              <td>{row.lat}</td>
              <td>{row.long}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className='table table-bordered m-2'>
        <TableHeader headerName={`DD°MM'SS"`} data={dataDMS} />

        <tbody>
          {dataDMS.map((row) => (
            <tr key={row.lat + row.long}>
              <td>{row.lat}</td>
              <td>{row.long}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
