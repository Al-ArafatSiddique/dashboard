import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';

export default function Datatable() {
    const actionColumn = [
        {
            field:"action",
            headerName: "Action",
            width: 200,
            renderCell: ()=>{
                return (
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className='datatable' style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}
