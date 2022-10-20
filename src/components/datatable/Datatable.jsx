import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatablesource';
import { Link } from 'react-router-dom';

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
    <div className='datatable' style={{ height: 600 }}>
      <div className="datatableTitle">
        Add New User
        <Link to='new' style={{textDecoration:"none"}} className='link'>
          Add New
        </Link>

      </div>
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
