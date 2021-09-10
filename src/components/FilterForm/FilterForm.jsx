import { RangeSlider, Select, Option } from '@ui5/webcomponents-react';
import "./styles.css";
import { useState } from 'react';
import {set_filters} from "../../redux/counter/actions"
import { useDispatch, useSelector } from "react-redux";

export default function FilterForm(){
    // const [values, setValues] = useState({});
    const dispatch = useDispatch();
    const stateFilters = useSelector((state)=>state.FilterReducer);
    const { value }=stateFilters;
    const handleChange = (e) => {
       dispatch(
        set_filters({
            ...value,
            [e.target.name]:e.target.value,
            

        })
       ) 
       
    }
    const onChangeRange = (Ui5CustomEvent) =>{
        const {currentTarget}=Ui5CustomEvent;
        const {_state}=currentTarget
        dispatch(
        set_filters({
            ...value,
            range:[_state.endValue, _state.startValue]
        })
        )

      }

      const onChangeEquipment = (Ui5CustomEvent) =>{
        const {currentTarget}=Ui5CustomEvent;
        const {_state}=currentTarget
        dispatch(
        set_filters({
            ...value,
            equipment: _state._text
        })
        )
  
      }

      const onChangeHours = (Ui5CustomEvent) =>{
        const {currentTarget}=Ui5CustomEvent;
        const {_state}=currentTarget
        dispatch(
        set_filters({
            ...value,
            hours:_state._text
        })
        )
      
      }
      const sendFilters = (e)=>{
        e.preventDefault();
          console.log(stateFilters)
      }
    return(
        <form className="filters_form" onSubmit={sendFilters}>
           
            <div className="typeHouse">
                <div>
                    <input onChange={handleChange} value="House" name="typeHouse" type="radio" id="HouseInput"></input>
                    <label for="HouseInput">House</label>
                </div>
                <div>
                    <input onChange={handleChange} value="Flat" name="typeHouse" type="radio" id="flat"></input>
                    <label for="flat">Flat/ apartament</label>
                </div>
                <div>
                    <input onChange={handleChange} value="Penthouse" name="typeHouse" type="radio" id="penthouse"></input>
                    <label for="penthouse">Penthouse</label>
                </div>
                <div>
                    <input onChange={handleChange} value="Duplex" name="typeHouse" type="radio" id="duplex"></input>
                    <label for="duplex">Duplex</label>
                </div>
            </div>

            <div className="bedrooms">
            
                    <label className="containerLarge">
                     
                    <input onChange={handleChange} value="0" name="bedroom" type="radio" id="studio"></input>
                    <span  className="checkmarkLarge">  0,
                       studio</span></label>
                
                    <label className="container">
                        
                    <input onChange={handleChange} value="1" name="bedroom" type="radio" id="oneBed"></input>
                    <span className="checkmark">1</span></label>
                
                    <label className="container">
                        
                    <input onChange={handleChange} value="2" name="bedroom" type="radio" id="twoBed"></input>
                    <span className="checkmark">2</span></label>
                
                    <label className="container">
                        
                    <input onChange={handleChange} value="3" name="bedroom" type="radio" id="treeBed"></input>
                    <span className="checkmark">3</span></label>
                
                    <label className="containerLarge">
                       
                    <input onChange={handleChange} value="4" name="bedroom" type="radio" id="forOrMoreBed"></input>
                    <span className="checkmarkLarge"> 4 o +</span></label>
            </div>

            <div className="bathrooms">
                <div>
                    <label className="container">
                        
                    <input onChange={handleChange} value="1" name="bathrooms" type="radio" id="oneBath"></input>
                    <span className="checkmark">1</span></label>
                </div><div>
                    <label className="container">
                        
                    <input onChange={handleChange} value="2" name="bathrooms" type="radio" id="twoBath"></input>
                    <span className="checkmark">2</span></label>
                </div><div>
                    <label className="containerLarge">
                        
                    <input onChange={handleChange} value="3" name="bathrooms" type="radio" id="threeOrMoreBath"></input>
                    <span className="checkmarkLarge">3 o +</span></label> 
                </div>               
            </div>


            <Select
            onChange={onChangeEquipment}
            >
                <Option>Equipment 1</Option>
                <Option>Equipment 2</Option>
                <Option>Equipment 3</Option>
                <Option>Equipment 4</Option>
            </Select>

            <div className="houseState">
                <div>
                    <input value="Needs renovation" onChange={handleChange} name="hose_State" type="radio" id="Needs_renovation"></input>
                    <label for="Needs_renovation">Needs renovation</label>
                </div>
               <div>
                    <input value="New house" onChange={handleChange} name="hose_State" type="radio" id="New_house"></input>
                    <label for="New_house">New House</label>
                </div>
                <div>
                    <input value="Good condition" onChange={handleChange} name="hose_State" type="radio" id="Good_condition"></input>
                    <label for="Good_condition">Good condition</label> 
                </div>  
            </div>
            
            <RangeSlider
               
                endValue="250"
                startValue="150"
                showTooltip="true"
                max="300.000"
                min="100.000"
                step="4.000"
                onChange={onChangeRange}
            />

            <Select
            onChange={onChangeHours}
            >
                <Option>last 48 hours</Option>
                <Option>last 36 hours</Option>
                <Option>last 24 hours</Option>
                <Option>last 12 hours</Option>
            </Select>

            <div className="moreFilters">
                <div>
                    <input onChange={handleChange} name="petsAllowed" type="checkbox" id="pets_allowed"></input>
                    <label for="pets_allowed">Needs renovation</label>
                </div><div>
                    <input onChange={handleChange} name="airConditioning" type="checkbox" id="air_conditioning"></input>
                    <label for="air_conditioning">New House</label>
                </div><div>
                    <input onChange={handleChange} name="terrace" type="checkbox" id="terrace"></input>
                    <label for="terrace">Good condition</label>
                </div><div>
                    <input onChange={handleChange} name="swimingPool" type="checkbox" id="swiming_pool"></input>
                    <label for="Good_condition">Good condition</label>
                </div><div>
                    <input onChange={handleChange} name="morefilters" type="checkbox" id="Good_condition"></input>
                    <label for="Good_condition">Good condition</label>
                </div><div>
                    <input onChange={handleChange} name="garden" type="checkbox" id="garden"></input>
                    <label for="garden">Good condition</label>
                </div><div>
                    <input onChange={handleChange} name="lift" type="checkbox" id="lift"></input>
                    <label for="lift">Good condition</label>
                </div>                       
            </div>
            <button type="submit">send</button>
      </form>
    )
}