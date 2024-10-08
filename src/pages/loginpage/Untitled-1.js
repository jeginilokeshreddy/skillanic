import React from "react";
import {useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack, TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';

// external packages
import "bootstrap-icons/font/bootstrap-icons.css";
//external css links
import "./Login.scss";

export default function Loginpage() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>

    <Box sx={{ p: 2, height: "100vh" }}> {/* Move the sx prop here */}
      
      <Stack  sx={{
        justifyContent: "center",
        alignItems: "center", height: "100vh"
      }} >
        <Card variant="outlined" sx={{
          width: {
            xs: "100%", // Width for extra-small screens (mobile)
            sm: "50%",  // Width for small screens (tablets)
            md: "35%",  // Width for medium screens (laptops)
            lg: "35%",  // Width for large screens (desktops)
            xl: "35%",  // Width for extra-large screens (large desktops)
          },
            background: {  sm: "red" , md:"black" },
          p: 2, // Padding of 2 for all screen sizes
        }}>
        <form style={{  display:"flex",justifyContent:"center" }} onSubmit={(e) => { e.preventDefault(); console.log("Form submitted"); }}>
            <Stack useFlexGap spacing={2} sx={{ width: "90%" }}>
        <Typography variant="h4" component="h2">h1. Heading </Typography>
        <TextField  tyep="text" id="outlined-basic" label="Enter Username" variant="outlined" />
        <TextField tyep="text" id="outlined-basic" label="Enter Password" variant="outlined" />
        <TextField tyep="text" id="outlined-basic" label="Conform Password" variant="outlined" />
            <FormControlLabel required control={<Checkbox />} label="Agree tems and conditions" />
           
        <Button variant="contained" type="submit">Submit</Button>
          </Stack>
      </form>
      </Card>
      </Stack>
    </Box>
    {/* // css-display flex concept */}
    <div className="parentcontainer">
      <p className="child1">child1</p>
       <p className="child1">child1</p>
        <p className="child1">child1</p>
         <p className="child1">child1</p>
          <p className="child1">child1</p>
           <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
    </div>
      {/* // css-display flex concept */}
      <div className="bootstapcontainer d-flex gap-3 flex-wrap flex-column">
        <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
        <p className="child1">child1</p>
      </div>
      {/* material ui */}
      <Stack spacing={5}>
        <Typography variant="h1" component={"span"}>1-material ui child elment</Typography>
        
        <Typography>1-material ui child elment</Typography>
        <Typography variant="h5" component={"p"}>1-material ui child elment</Typography>
        <Typography>1-material ui child elment</Typography>
        <Typography>1-material ui child elment</Typography>
        <Typography>1-material ui child elment</Typography>
      </Stack>
      <Box  spacing={5}>
        <Typography variant="h1" component={"span"}>1-material ui child elment</Typography>

        <Typography>1-material ui child elment</Typography>
        <Typography variant="h5" component={"p"}>1-material ui child elment</Typography>
        <Typography>1-material ui child elment</Typography>
        <Typography>1-material ui child elment</Typography>
        <Typography>1-material ui child elment</Typography>
      </Box>
    </>
  );
}


