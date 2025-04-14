import React, { Fragment, useState, useEffect, useRef } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  Column,
  HeaderGroup,
  CellProps,
  TableInstance,
  UsePaginationInstanceProps,
  UsePaginationState,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersState,
} from 'react-table';
import { GlobalFilter } from '../../data/tables/datatablesdata';
import SpkButton from '../reusable-uielements/spk-button';

const EditableCell = ({
  value: initialValue,
  rowIndex,
  columnId,
  updateMyData,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const onChange = (e) => setValue(e.target.value);
  const onBlur = () => {
    setIsEditing(false);
    updateMyData(rowIndex, columnId, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return isEditing ? (
    <input value={value} onChange={onChange} onBlur={onBlur} autoFocus />
  ) : (
    <div onClick={() => setIsEditing(true)}>{value}</div>
  );
};

const Spkdatatable = ({
  COLUMNS,
  DATATABLE,
  editable = false,
  resetData,
}) => {
  const [data, setData] = useState(DATATABLE);
  const originalDataRef = useRef(DATATABLE);

  const updateMyData = (rowIndex, columnId, value) => {
    setData((oldData) =>
      oldData.map((row, index) => (index === rowIndex ? { ...row, [columnId]: value } : row))
    );
  };

  const editableCellRenderer = ({
    value,
    row,
    column,
  }) => (
    <EditableCell
      value={value}
      rowIndex={row.index}
      columnId={column.id}
      updateMyData={updateMyData}
    />
  );

  const defaultColumn = editable ? { Cell: editableCellRenderer } : {};

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data,
      defaultColumn,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = tableInstance;

  const handleResetData = () => {
    setData(originalDataRef.current);
  };

  return (
    <Fragment>
      {editable && (
        <SpkButton onClickfunc={handleResetData} Buttonvariant="primary">
          Reset Data
        </SpkButton>
      )}

      <div className="d-flex align-items-center mb-3">
        <select
          className="my-1 selectpage border me-1 p-1 rounded-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((size) => (
            <option key={Math.random()} value={size}>
              Show {size}
            </option>
          ))}
        </select>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>

      <div className="table-responsive">
        <table {...getTableProps()} className="table table-hover mb-0 table-bordered">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(
                      (column).getSortByToggleProps ? (column).getSortByToggleProps() : {}
                    )}
                    key={Math.random()}
                  >
                    {column.render('Header')}
                    <span>
                      {(column).isSorted
                        ? (column).isSortedDesc
                          ? <i className="fa fa-angle-down"></i>
                          : <i className="fa fa-angle-up"></i>
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.length === 0 ? (
              <tr>
                <td colSpan={COLUMNS.length} className="text-center">
                  No results found for "{globalFilter}"
                </td>
              </tr>
            ) : (
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={Math.random()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} key={Math.random()}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between mt-4 ">
        <span className="">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span className="sm:ms-auto ">
          <button
            className="btn-outline-light tablebutton me-2 sm:inline block my-1"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {' Previous '}
          </button>
          <button
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {' << '}
          </button>
          <button
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {' < '}
          </button>
          <button
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {' > '}
          </button>
          <button
            className="btn-outline-light tablebutton me-2 my-1"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {' >> '}
          </button>
          <button
            className="btn-outline-light tablebutton me-2 sm:inline block my-1"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {' Next '}
          </button>
        </span>
      </div>
    </Fragment>
  );
};

export default Spkdatatable;
