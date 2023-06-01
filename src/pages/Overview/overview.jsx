import { Box, Button, IconButton, Typography, useTheme, MenuItem, TextField } from "@mui/material";
import React from 'react';
import Header from '../../components/header';
import { useState, useRef } from "react";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import "../../App.css"



const Overview = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  {/*const colorMode = useContext(ColorModeContext);*/}

  const [dept, setDept]=useState('')
const deptInfo=["CSE", "EEE", "EC" , "CE"]

const [cla, setCla]=useState('')
const claInfo=["A batch", "B batch"]

const [yr, setYr]=useState('')
const yrInfo=[ "1950",
"1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960",
"1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970",
"1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980",
"1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990",
"1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000",
"2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010",
"2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020",
"2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030",
"2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040",
"2041", "2042", "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050",
"2051", "2052", "2053", "2054", "2055", "2056", "2057", "2058", "2059", "2060"]

const [sem, setSem]=useState('')
const semInfo=["S1","S2","S3","S4","S5","S6","S7","S8"]

const [files, setFiles] = useState( );
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  
  
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
   
  };
       

 
  if (files) return (

    
    <div classname="dragndrop">
    <div className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        
        <div className="actions">
            <button onClick={() => setFiles(null)}   >Cancel</button>
            <button onClick={handleUpload}>Upload</button>
            
        </div>
    </div>
    </div>
    
  )
  


      
  
  
  
        return (
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center"  >
          <Header title="WELCOME," subtitle="Here what's happening in our college" />
          
          
{/*akathe color */}
<Box mx={ 2 }>
  <TextField
    
     label="DEPARTMENT"
     value={dept}
     onChange={e=>setDept(e.target.value)}
     select
     SelectProps={{  }}
     sx={{width:"200px", top:"120px",left:"-190px",position:"relative"}}
     
      >
        {deptInfo.map((dept) => (
         <MenuItem value={dept} key={dept} sx={{color:"rgb(76, 206, 172)"}} >
          {dept}
         </MenuItem>   
      ))}
     </TextField>
     
     <TextField
    label="CLASS"
    value={cla}
    onChange={e=>setCla(e.target.value)}
    select
    SelectProps={{  }}
    sx={{width:"200px", top:"120px",left:"-140px",position:"relative"}}
    
     >
       {claInfo.map((cla) => (
        <MenuItem value={cla} key={cla} sx={{color:"rgb(76, 206, 172)"}} >
         {cla}
        </MenuItem>   
     ))}
    </TextField>
   
    <TextField
     label="YEAR"
    value={yr}
    onChange={e=>setYr(e.target.value)}
    select
    SelectProps={{  }}
    sx={{width:"200px", top:"120px",left:"-90px",position:"relative"}}
    >
       {yrInfo.map((yr) => (
        <MenuItem value={yr} key={yr} sx={{color:"rgb(76, 206, 172)"}} >
         {yr}
        </MenuItem>   
     ))}
    </TextField>
    <TextField
    
    label="SEMESTER"
    value={sem}
    onChange={e=>setSem(e.target.value)}
    select
    SelectProps={{  }}
    sx={{width:"200px", top:"120px",left:"-50px",position:"relative"}}
    
     >
       {semInfo.map((sem) => (
        <MenuItem value={sem} key={sem} sx={{color:"rgb(76, 206, 172)"}} >
         {sem}
        </MenuItem>   
     ))}
    </TextField>

     
    
    
         
          <Button
            sx={{
              backgroundColor:colors.primary[400],
              color: colors.greenAccent[500],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              top:"120px",
              left:"5px",
              height:"58px",
              width:"200px",
              position:"relative"
               }}
          >
            <FilterAltOutlinedIcon sx={{ mr: "10px" }} />
            FILTER
          </Button>
          </Box>
          </Box>


          {/* drag and drop */}
          <Box>
     <>
     
    <div 
        className="dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
    >
      <h1>Drag and Drop Files to Upload</h1>
      <h1>or</h1>
      <input 
        type="file"
        multiple
        onChange={(event) => setFiles(event.target.files)}
        hidden
        accept=".pdf,.doc,.docx,.html,.xls,.xlsx"
        ref={inputRef}
      />
      <button onClick={() => inputRef.current.click()}>Select Files</button>
    </div>
</>




          </Box>
          </Box>

     ); 
     
  };


export default Overview;