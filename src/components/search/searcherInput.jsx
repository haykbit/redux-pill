
import { TextField, IconButton } from '@material-ui/core';
import  SearchIcon  from '@material-ui/icons/Search';
import { useState,useEffect} from 'react';
import $ from "jquery";
import useStyles from "./style";
import { getPropierties } from '../../redux/counter/actions';

export default function InputText(){

//   useEffect(()=>{
   
// },[])
// const dispatch = useDispatch();

let cities=[];
$.ajax({
    url:"http://localhost:3000/properties",
    type:"GET",
    success:(res)=>{
        res.map((user)=>{
            cities.push(user.city) ;
        })
    }
})
   
     const classes = useStyles();
     function handelChange(e){
        
         cities.forEach((city)=>{
            Array.from(city).forEach((cityLeters)=>{
                
                if(cityLeters===e.target.value){
                    console.log(e.target.value) 
                }else{
                    console.log("not match") 
                }
            })
            //  const cityMatch = city.map((cityLeter)=>{
                 
            //      if(cityLeter===e.target.value){
            //          return"match letter",cityLeter;
            //         }
            //     })
            //     console.log(cityMatch);
        })
     }
    //  console.log(dataCityState);
    return (
       <form>
            <TextField 
            value=""
            onChange={handelChange}
            id="outlined-basic" 
            label="Where?" 
            variant="outlined" />
            <IconButton 
            type="submit" 
            className={classes.iconButton} 
            aria-label="search"
            
            >
            <SearchIcon />
            </IconButton>
        </form>
    )
}
// className={classes.iconButton}