import React, { useState } from "react";
import { Modal, Button, TextField, Box, Typography } from "@mui/material";
import axios from "axios";

export default function UpdateTag({ selected, setSelected, UserGet }) {
  const [nameTaek, setNameTaek] = useState("");

  const handleClose = () => {
    setSelected([]);
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/update/tags/${selected[0]}`, {
        name_taek: nameTaek,
      })
      .then((response) => {
        console.log(response.data);
        UserGet();
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Modal
      open={selected.length === 1}
      onClose={handleClose}
      aria-labelledby="update-modal-title"
      aria-describedby="update-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" id="update-modal-title" gutterBottom>
          Update Tag
        </Typography>
        <TextField
          fullWidth
          label="Name Taek"
          value={nameTaek}
          onChange={(e) => setNameTaek(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <Button onClick={handleUpdate} variant="contained" sx={{ mr: 2 }}>
          Update
        </Button>
        <Button onClick={handleClose} variant="contained" color="error">
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}
