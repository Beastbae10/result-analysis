import React from "react";
import { Box, Typography, TextField , MenuItem, useTheme } from "@mui/material"
import { tokens } from "../pages/theme";
import { useState } from "react";
 

const Dropdown = (  ) => {
  const theme = useTheme();
const colors = tokens(theme.palette.mode);


    const [dept, setDept]=useState('')
     const deptInfo=["CSE", "EEE", "EC" , "CE"]
      return 
      
      <Box>

          <Typography variant="h4">

          </Typography>
          <Box mx={ 3 }>
            <TextField
               label="DEPARTMENT"
               value={dept}
               onChange={e=>setDept(e.target.value)}
               select
               SelectProps={{  }}
               sx={{width:"300px"}}
               >
                  {deptInfo.map((dept) => (
                   <MenuItem value={dept} key={dept}>
                    {dept}
                   </MenuItem>   
                ))}
               </TextField>
           
      
               
               </Box>
               
               </Box>
               
};

export default Dropdown;
