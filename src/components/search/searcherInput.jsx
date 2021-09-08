
import { TextField, IconButton } from '@material-ui/core';
import  SearchIcon  from '@material-ui/icons/Search';
import { useState } from 'react';
import $ from "jquery";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import {getPropiertiesByCityName} from '../../redux/counter/actions';


export default function InputText(){
    const [inputValue, setInputValue] = useState("");
     const [citySearched, setCitySearched] = useState("");
     const [defalutCityValue, setDefalutCityValue] = useState("");
    const dispatch = useDispatch();
    // const state = useSelector((state)=>state.data);
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
    const handelChange=(e)=>{
        setInputValue(e.target.value);
        cities.map((city)=>{
            Array.from(city).find((cityLeters)=>{
                let letterMatch = cityLeters===e.target.value
                
                if(letterMatch===true)  {
                    setCitySearched(city) ;  
                    // e.target.value=defalutCityValue
                    
                }
            })
        })
        console.log(citySearched);
    }

    async function handlePropietiesByCity(e){
        e.preventDefault();
       console.log(defalutCityValue);
        dispatch(getPropiertiesByCityName(inputValue))
    }

    return (
        <>
        
       <form onSubmit={handlePropietiesByCity}>
            <TextField 
            
            defaultValue=""
            placeholder={defalutCityValue}
            onChange={handelChange}
            name="city"
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
        
        <ul>
            <li>
            <button   onClick={()=>{
              
                dispatch(getPropiertiesByCityName(citySearched))
                }}>{citySearched}</button>
            </li>
        </ul>
        
       </>
    )
}
// className={classes.iconButton}