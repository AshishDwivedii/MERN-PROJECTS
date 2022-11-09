import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import {NavLink} from 'react-router-dom';
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar position="sticky" sx= {{backgroundColor:"#002b36"}}>	
        <Toolbar>
         <NavLink to='/' onClick={()=> setValue(null)}>
        <Typography color='white' >
            <LibraryBooksOutlinedIcon />
          </Typography></NavLink>
        
          <Tabs
            sx={{ml:'auto'}}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to='/add' label="Add Product" />
            <Tab LinkComponent={NavLink} to='/books' label="Books" />
            <Tab LinkComponent={NavLink} to='/about' label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
