import { RangeSlider, Select, Option } from '@ui5/webcomponents-react';
import "./styles.css";

export default function FilterForm(){
    const onChangeRange = (Ui5CustomEvent) =>{
        const {currentTarget}=Ui5CustomEvent;
        const {_state}=currentTarget
    
       alert(_state.endValue);
       alert( _state.startValue);
      }

      const onChangeEquipment = (Ui5CustomEvent) =>{
        const {currentTarget}=Ui5CustomEvent;
        const {_state}=currentTarget
    
       alert( _state._text);
      }

      const onChangeHours = (Ui5CustomEvent) =>{
        const {currentTarget}=Ui5CustomEvent;
        const {_state}=currentTarget
    
       alert(_state._text);
      
      }
    return(
        <form className="filters_form">
           
            <div className="typeHouse">
                <div>
                    <input name="typeHouse" type="radio" id="HouseInput"></input>
                    <label for="HouseInput">House</label>
                </div>
                <div>
                    <input name="typeHouse" type="radio" id="flat"></input>
                    <label for="flat">Flat/ apartament</label>
                </div>
                <div>
                    <input name="typeHouse" type="radio" id="penthouse"></input>
                    <label for="penthouse">Penthouse</label>
                </div>
                <div>
                    <input name="typeHouse" type="radio" id="duplex"></input>
                    <label for="duplex">Duplex</label>
                </div>
            </div>

            <div className="bedrooms">
                <div>
                    <input name="bedroom" type="radio" id="studio"></input>
                    <label for="studio">0, studio</label>
                </div><div>
                    <input name="bedroom" type="radio" id="oneBed"></input>
                    <label for="twoBed">1</label>
                </div><div>
                    <input name="bedroom" type="radio" id="twoBed"></input>
                    <label for="twoBed">2</label>
                </div><div>
                    <input name="bedroom" type="radio" id="treeBed"></input>
                    <label for="treeBed">3</label>
                </div><div>
                    <input name="bedroom" type="radio" id="forOrMoreBed"></input>
                    <label for="forOrMoreBed">4 o more</label>
                </div>
            </div>

            <div className="bathrooms">
                <div>
                    <input name="bathrooms" type="radio" id="oneBath"></input>
                    <label for="oneBath">1</label>
                </div><div>
                    <input name="bathrooms" type="radio" id="twoBath"></input>
                    <label for="twoBath">2</label>
                </div><div>
                    <input name="bathrooms" type="radio" id="threeOrMoreBath"></input>
                    <label for="threeOrMoreBath">3 o more</label> 
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
                    <input name="hose_State" type="radio" id="Needs_renovation"></input>
                    <label for="Needs_renovation">Needs renovation</label>
                </div>
               <div>
                    <input name="hose_State" type="radio" id="New_house"></input>
                    <label for="New_house">New House</label>
                </div>
                <div>
                    <input name="hose_State" type="radio" id="Good_condition"></input>
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
                    <input name="" type="checkbox" id="Needs_renovation"></input>
                    <label for="Needs_renovation">Needs renovation</label>
                </div><div>
                    <input name="" type="checkbox" id="New_house"></input>
                    <label for="New_house">New House</label>
                </div><div>
                    <input name="" type="checkbox" id="Good_condition"></input>
                    <label for="Good_condition">Good condition</label>
                </div>      
            </div>
      </form>
    )
}