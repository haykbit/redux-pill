import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
import { DataGrid } from "@material-ui/data-grid";
import { LinearProgress, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import SaveIcon from '@material-ui/icons/Save';
import {
  getPropierties,
  deletPropierties,
  updatePropierties,
} from "../../redux/counter/actions";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);
  const [updateData, setUpdate] = useState([]);
  const [render, setRender] = useState();

  useEffect(() => {
    dispatch(getPropierties());
    setRender(false);
  }, [render]);

  //console.log("DASHBOARD STATE: ", state.value);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "street",
      headerName: "Street",
      width: 200,
      editable: true,
    },
    {
      field: "size",
      headerName: "Size",
      width: 120,
      editable: true,
    },
    {
      field: "room",
      headerName: "Room",
      width: 120,
      editable: true,
    },
    {
      field: "bath",
      headerName: "Bathroom",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 110,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Remove",
      renderCell: function IconToolbar(props) {
        const { id } = props;

        const remove = () => {
          dispatch(deletPropierties(id, state.value));
          setRender(true);
        };

        return (
          <div>
            <Link to="/dashboard" onClick={() => {}}>
              <IconButton
                color="inherit"
                size="small"
                aria-label="delete"
                onClick={remove}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Link>
          </div>
        );
      },
      sortable: false,
      width: 100,
      filterable: false,
      align: "center",
      disableColumnMenu: true,
      disableReorder: true,
    },
    {
      field: "action",
      headerName: "Update",
      renderCell: function IconToolbar(props) {
        const { id, street, size, room, bath, price } = props.row;
        console.log(props);

        const update = () => {
          let propiertie = {
            street: street,
            room: room,
            bath: bath,
            size: size,
            price: price,
          }
          console.log(propiertie);
          dispatch(updatePropierties(id, propiertie, state.value ));
        };

        return (
          <div>
            <Link to="/dashboard" onClick={() => {}}>
              <IconButton
                color="inherit"
                size="small"
                aria-label="delete"
                onClick={update}
              >
                <SaveIcon fontSize="small" />
              </IconButton>
            </Link>
          </div>
        );
      },
      sortable: false,
      width: 100,
      filterable: false,
      align: "center",
      disableColumnMenu: true,
      disableReorder: true,
    },
  ];

  const rows = state.value;

  return (
    <>
      <Navbar />
      <div style={{ height: 400, width: "100%", marginTop: "100px" }}>
        {state.value.length === 0 ? (
          <LinearProgress />
        ) : (
          <>
          <DataGrid
            rows={rows}
            columns={columns}
            {...updateData}
          />
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
