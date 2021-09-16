import { RangeSlider, Select, Option } from "@ui5/webcomponents-react";
import "./styles.css";
import { useState } from "react";
import { set_filters } from "../../redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";

export default function FilterForm() {
  const [doFilters, setdoFilters] = useState(false);
  const dispatch = useDispatch();
  const stateFilters = useSelector((state) => state.FilterReducer);
  const { value } = stateFilters;

  const handleChange = (e) => {
    dispatch(
      set_filters({
        ...value,
        [e.target.name]: e.target.value,
      })
    );
    setdoFilters(true);
  };

  const handleChangeCheck = (e) => {
    dispatch(
      set_filters({
        ...value,
        [e.target.name]: e.target.checked,
      })
    );
    setdoFilters(true);
  };

  const onChangeRange = (Ui5CustomEvent) => {
    const { currentTarget } = Ui5CustomEvent;
    const { _state } = currentTarget;
    dispatch(
      set_filters({
        ...value,
        range: [_state.startValue, _state.endValue],
      })
    );
    setdoFilters(true);
  };

  const onChangeEquipment = (Ui5CustomEvent) => {
    const { currentTarget } = Ui5CustomEvent;
    const { _state } = currentTarget;
    dispatch(
      set_filters({
        ...value,
        equipment: _state._text,
      })
    );
    setdoFilters(true);
  };

  const onChangeHours = (Ui5CustomEvent) => {
    const { currentTarget } = Ui5CustomEvent;
    const { _state } = currentTarget;
    dispatch(
      set_filters({
        ...value,
        hours: _state._text,
      })
    );
  };

  return (
    <form className="filters_form">
      <div>
        <h5>Type house</h5>
        <div className="typeHouse">
          <div>
            <input
              onChange={handleChange}
              value="House"
              name="typeHouse"
              type="radio"
              id="HouseInput"
            ></input>
            <label for="HouseInput">House</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              value="Flat"
              name="typeHouse"
              type="radio"
              id="flat"
            ></input>
            <label for="flat">Flat/ apartament</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              value="Penthouse"
              name="typeHouse"
              type="radio"
              id="penthouse"
            ></input>
            <label for="penthouse">Penthouse</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              value="Duplex"
              name="typeHouse"
              type="radio"
              id="duplex"
            ></input>
            <label for="duplex">Duplex</label>
          </div>
        </div>
      </div>

      <div>
        <h5>Bedrooms</h5>
        <div className="bedrooms">
          <label className="container">
            <input
              onChange={handleChange}
              value="0"
              name="bedroom"
              type="radio"
              id="studio"
            ></input>
            <span className="checkmark"> 0+</span>
          </label>

          <label className="container">
            <input
              onChange={handleChange}
              value="1"
              name="bedroom"
              type="radio"
              id="oneBed"
            ></input>
            <span className="checkmark">1</span>
          </label>

          <label className="container">
            <input
              onChange={handleChange}
              value="2"
              name="bedroom"
              type="radio"
              id="twoBed"
            ></input>
            <span className="checkmark">2</span>
          </label>

          <label className="container">
            <input
              onChange={handleChange}
              value="3"
              name="bedroom"
              type="radio"
              id="treeBed"
            ></input>
            <span className="checkmark">3</span>
          </label>

          <label className="container">
            <input
              onChange={handleChange}
              value="4"
              name="bedroom"
              type="radio"
              id="forOrMoreBed"
            ></input>
            <span className="checkmark"> 4+</span>
          </label>
        </div>
      </div>

      <div>
        <h5>Bathrooms</h5>
        <div className="bathrooms">
          <label className="container">
            <input
              onChange={handleChange}
              value="1"
              name="bathrooms"
              type="radio"
              id="oneBath"
            ></input>
            <span className="checkmark">1</span>
          </label>

          <label className="container">
            <input
              onChange={handleChange}
              value="2"
              name="bathrooms"
              type="radio"
              id="twoBath"
            ></input>
            <span className="checkmark">2</span>
          </label>

          <label className="container">
            <input
              onChange={handleChange}
              value="3"
              name="bathrooms"
              type="radio"
              id="threeOrMoreBath"
            ></input>
            <span className="checkmark">3+</span>
          </label>
        </div>
      </div>
      <div>
        <h5>Equip</h5>
        <Select onChange={onChangeEquipment}>
          <Option>Equipment 1</Option>
          <Option>Equipment 2</Option>
          <Option>Equipment 3</Option>
          <Option>Equipment 4</Option>
        </Select>
      </div>
      <div>
        <h5>State</h5>
        <div className="houseState">
          <div>
            <input
              value="Needs renovation"
              onChange={handleChange}
              name="house_State"
              type="radio"
              id="Needs_renovation"
            ></input>
            <label for="Needs_renovation">Needs renovation</label>
          </div>
          <div>
            <input
              value="New house"
              onChange={handleChange}
              name="house_State"
              type="radio"
              id="New_house"
            ></input>
            <label for="New_house">New House</label>
          </div>
          <div>
            <input
              value="Good condition"
              onChange={handleChange}
              name="house_State"
              type="radio"
              id="Good_condition"
            ></input>
            <label for="Good_condition">Good condition</label>
          </div>
        </div>
      </div>

      <div>
        <h5>Price Range</h5>
        <RangeSlider
          endValue="150000"
          startValue="500"
          showTooltip="true"
          max="300000"
          min="500"
          step="4.000"
          onChange={onChangeRange}
        />
      </div>
      <div>
        <h5>Price Range</h5>
        <Select onChange={onChangeHours}>
          <Option>last 48 hours</Option>
          <Option>last 36 hours</Option>
          <Option>last 24 hours</Option>
          <Option>last 12 hours</Option>
        </Select>
      </div>
      <div>
        <h5>More Filters</h5>
        <div className="moreFilters">
          <div>
            <input
              onChange={handleChangeCheck}
              name="petsAllowed"
              type="checkbox"
              id="pets_allowed"
              value="activated"
            ></input>
            <label for="pets_allowed">Pets allowed</label>
          </div>
          <div>
            <input
              onChange={handleChangeCheck}
              name="airConditioning"
              type="checkbox"
              id="air_conditioning"
              value="activated"
            ></input>
            <label for="air_conditioning">Air Conditioning</label>
          </div>
          <div>
            <input
              onChange={handleChangeCheck}
              name="terrace"
              type="checkbox"
              id="terrace"
              value="activated"
            ></input>
            <label for="terrace">Terrace</label>
          </div>
          <div>
            <input
              onChange={handleChangeCheck}
              name="swimingPool"
              type="checkbox"
              id="swiming_pool"
              value="activated"
            ></input>
            <label for="Good_condition">Swiming pool</label>
          </div>
          <div>
            <input
              onChange={handleChangeCheck}
              name="garden"
              type="checkbox"
              id="garden"
              value="activated"
            ></input>
            <label for="garden">Garden</label>
          </div>
          <div>
            <input
              onChange={handleChangeCheck}
              name="lift"
              type="checkbox"
              id="lift"
              value="activated"
            ></input>
            <label for="lift">Lift</label>
          </div>
        </div>
      </div>
    </form>
  );
}
