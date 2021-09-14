import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./index.css";
import { DataGrid } from "@material-ui/data-grid";
import {
  LinearProgress,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import {
  getPropierties,
  deletPropierties,
  resetPropierties,
} from "../../redux/counter/actions";
import Navbar from "../../components/Navbar/Navbar";

const validateEmail = (email) => {
  const re =
    /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
  return re.test(String(email).toLowerCase());
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state.reducer);

  useEffect(() => {
    dispatch(getPropierties());
  }, [state]);

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
