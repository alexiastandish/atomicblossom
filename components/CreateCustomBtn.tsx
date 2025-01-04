"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import Button from "./Button";
import useDndForm from "../hooks/use-dnd-form";

export default function CreateCustomBtn(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const { submit } = useDndForm({ name });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        accent
        onClick={handleClickOpen}
        label="Create a New Shelf Design"
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <h1 className="font-display p-5 text-primary text-2xl">
            Name Your Creation
          </h1>
          <div className="relative w-full max-w-xs my-4">
            <input
              id="text-field"
              type="text"
              className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 transition-colors duration-300"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="text-field"
              className="absolute left-0 top-0 text-gray-500 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 transition-all duration-300"
            >
              Name
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button outline accent label="Cancel" onClick={handleClose}></Button>
          <Button primary label="Submit" onClick={submit}></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
