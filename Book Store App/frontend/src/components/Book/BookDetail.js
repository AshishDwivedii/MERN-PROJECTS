import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Box, Button, Checkbox, FormControlLabel, FormLabel, TextField} from '@mui/material/'
import axios from 'axios';

const BookDetail = () => {
  const history = useNavigate();

    const id = useParams().id;

    const [checked , setChecked] = useState(false);
    const [inputs, setInputs] = useState();

    useEffect(()=>{
      const fetchHandler = async()=>{
        await
        axios.get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data)=> setInputs(data.book))
        
      };
      fetchHandler();
 },[id]);
    
 const sendRequest = async()=>{
   await
   axios.put(`http://localhost:5000/books/${id}`,{
    name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked)

   }).then((res)=> res.data)
 };

 const handleSubmit = (e)=>{
  e.preventDefault();
  sendRequest().then(()=> history('/books'));
 }

 const handleChange = (e)=>{
  setInputs((prevState)=> ({
    ...prevState,
    [e.target.name] : e.target.value
  }))
 }
  return (
    <div>
      { inputs && (
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
      
      <Button sx={{marginTop:"8px"}} variant="contained"  type="submit">Update Book</Button>
        </Box>
    </form>
      )}
    </div>
    
  )
}

export default BookDetail
