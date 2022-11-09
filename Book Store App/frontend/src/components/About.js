import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <div >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          Our Book Management App has  CRUD features
        </Typography>
        <Typography sx={{ fontFamily:'monospace' }} variant="h5">
          By MERN STACK
        </Typography>
      </Box>
    </div>)
}

export default About
