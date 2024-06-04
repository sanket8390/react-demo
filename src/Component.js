import React from "react";
import {} from "@mui/material"
import TableDemo from "./TableDemo";
import FormTable from "./FormTable";

const TableComponent = () => {
   const [rows,setRows] = React.useState([])
   const [editRow,setEditRow] = React.useState([])


   return(
   <div>
      <TableDemo rows={rows} setEditRow={setEditRow}/>
      <FormTable rows={rows} setRows={setRows} editRow={editRow}/>

   </div>
   )
};

export default TableComponent