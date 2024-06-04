import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DoneIcon from '@mui/icons-material/Done';
import { Button } from '@mui/material';

export default function FormTable({rows,setRows,editRow, updateRow}) {
const intialValues = {
   description:'',
   hsnCode:'',
   unitPrice:'',
   quantity:'',
   cgst:'',
   sgst:'',
   total:'',
   id:''
}
const handleUpdate = (data) =>{
  const updatedRows = rows.map((item) =>{
    if(item.id===data.id) {
      return data
    }
    return item
  })
  setRows(updatedRows)
}
   const [formData,setFormData] = React.useState(intialValues)
   const handleSubmit = (e) => {
      e.preventDefault();
      if(formData.id){
        handleUpdate(formData)
      }
      else {
        formData['id']= Math.random().toFixed(3) *100
        setRows([...rows,formData])
      }
      setFormData(intialValues)

   }
const handlePrice = (e,key) => {
  let sgst =0;
  let cgst =0;
  let total =0;
  if(key ==='unitPrice') {
    total = (e.target.value * formData.quantity || 0)
    sgst = (total/100)*9;
    cgst=sgst
    
  } else if(key === 'quantity'){
    total = (e.target.value * formData.unitPrice || 0)
    sgst = (total/100)*9
    cgst=sgst
  }
  setFormData({...formData,[key]:e.target.value,sgst,cgst,total:total+cgst+sgst})
}
React.useEffect(()=>{
 editRow && setFormData(editRow)
},[editRow])

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 0.8, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-required"
          label="description"
          onChange={(e) => setFormData({...formData,description:e.target.value})}
          value={formData.description}
          name='description'
        />
        <TextField
          id="outlined-required"
          label="hsn code"
          onChange={(e) => setFormData({...formData,hsnCode:e.target.value})}
          value={formData.hsnCode}
          name='hsn code'
        />
        <TextField
          id="outlined-required"
          label="unit price"
          onChange={(e) => handlePrice(e,'unitPrice')}
          value={formData.unitPrice}
          name='unit price'
        />
        <TextField
          id="outlined-required"
          label="quantity"
          onChange={(e) => handlePrice(e,'quantity')}
          value={formData.quantity}
          name='quantity'
        />
        <TextField
          id="outlined-required"
          label="cgst"
          onChange={(e) => setFormData({...formData,cgst:e.target.value})}
          value={formData.cgst}
          name='cgst'
        />
        <TextField
          id="outlined-required"
          label="sgst"
          onChange={(e) => setFormData({...formData,sgst:e.target.value})}
          value={formData.sgst}
          name='sgst'
        />
        <TextField
          id="outlined-required"
          label="total"
          onChange={(e) => setFormData({...formData,total:e.target.value})}
          value={formData.total}
          name='total'
        />
      <Button type="submit" onClick={handleSubmit} sx={{height:'10ch'}}  >
        <DoneIcon />
     
      </Button>
      
      </form>
    </Box>
  );
}
