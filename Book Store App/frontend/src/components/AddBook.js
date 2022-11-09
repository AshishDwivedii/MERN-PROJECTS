import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import axios from "axios";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const history = useNavigate();
  const [checked , setChecked] = useState(false);
  const [inputs, setInputs] = useState({
    name:'',
    description:'',
    price:'',
    author:'',
    image:''
  });

  const handleChange= (e)=>{
    setInputs((prevState)=>({  //object destructuring
      ...prevState, 
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async()=>{
     await
     axios.post('http://localhost:5000/books',{
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked)
     })
     .then((res)=> res.data);
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=> history('/books'));
  }


  return (
    <form onSubmit={handleSubmit}>
      <Box
      display={"flex"}
      flexDirection={'column'}
      justifyContent={'center'}
      maxWidth={600}
      alignContent={'center'}
      alignSelf={'center'}
      marginLeft={'auto'}
      marginRight={'auto'}
      marginTop={5}
      >
        <FormLabel>Book Name </FormLabel>
        <TextField  
        value={inputs.name}
        onChange={handleChange}
        fullWidth variant="outlined" name="name" />
      
        <FormLabel>Author Name </FormLabel>
        <TextField 
         value={inputs.author}
         onChange={handleChange}
        fullWidth variant="outlined" name="author" />
      
        <FormLabel>Description</FormLabel>
        <TextField 
         value={inputs.description}
         onChange={handleChange}
        fullWidth variant="outlined" name="description" />
      
        <FormLabel>Price </FormLabel>
        <TextField 
         value={inputs.price}
         onChange={handleChange}
        type='number' fullWidth variant="outlined" name="price" />
      
        <FormLabel>Image</FormLabel>
        <TextField
         value={inputs.image}
         onChange={handleChange}
        fullWidth variant="outlined" name="image" />
      
      <FormControlLabel 
      control={
          <Checkbox checked={checked} onChange={()=> setChecked(!checked)} />
        } 
        label="Available" />
      
      <Button sx={{marginTop:"8px"}} variant="contained"  type="submit">Add Book</Button>
        </Box>
    </form>
  );
}

export default AddBook;
