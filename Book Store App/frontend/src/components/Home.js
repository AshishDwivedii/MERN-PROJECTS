import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import React from 'react'

function Home() {
  return (
    <div >
    <Box display="flex" justifyContent={'flex-end'} flexDirection="column" alignItems="center">
      
      <Box marginTop={'20vh'} marginBottom={'20vh'} >
       <Typography variant='h2'>Book Management App</Typography>

     </Box>
     
     <Box>
      <Button variant='contained' LinkComponent={Link} to='/books' color='success' >
        <Typography variant='h5'>All Books</Typography></Button>
     </Box>
   
     </Box>
    </div>
  )
}

export default Home
