import axios from "axios"

export const submitDemoForm =async (data) =>{
   const response = await axios.post("http://localhost:5454/api/form",data)
   return response.data;
}