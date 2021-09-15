import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
import { DataGrid } from "@material-ui/data-grid";
import {
  LinearProgress,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import {
  getPropierties,
  deletPropierties,
} from "../../redux/counter/actions";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);
  const [render, setRender]= useState(false)
  
  useEffect(() => {
    dispatch(getPropierties());
  }, [render]);

  console.log("DASHBOARD STATE: ", state.value);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    /*{
      field: "i",
      headerName: "Propiertie",
      width: 150,
      editable: true,
    },*/
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
  ];

  const rows = state.value;

  return (
    <>
      <Navbar />
      <div style={{ height: 400, width: "100%", marginTop: "100px" }}>
        {state.value.length === 0 ? (
          <LinearProgress />
        ) : (
          <DataGrid rows={rows} columns={columns} disableSelectionOnClick />
        )}
      </div>
    </>
  );
};

export default Dashboard;
