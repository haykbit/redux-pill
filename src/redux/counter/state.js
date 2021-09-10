const INITIAL_STATE = { status: "ok", value: [] };
const INITIAL_FILTER_STATE = {
  status: "ok",
  value: {
    typeHouse: "",
    bedroom: "",
    bathrooms: "",
    equipment: "",
    house_State: "",
    range: [500, 150000],
    hours: "",
    petsAllowed: false,
    airConditioning: false,
    terrace: false,
    swimingPool: false,
    garden: false,
    lift: false,
  },
};

export { INITIAL_STATE, INITIAL_FILTER_STATE };
