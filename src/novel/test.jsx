import { Autocomplete, Chip, TextField, Box, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Test() {
  const [datatype, setType] = useState([]);
  const [datanovel, setTagnovel] = useState({});
  const [datatype2, setType2] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedTypeNovel, setSelectedTypeNovel] = useState(null);

  const handleGetUpdate = () => {
    axios
      .get(`http://localhost:5000/taeknovel`)
      .then((response) => {
        const data = response.data.map((item) => ({
          id: item.id_taek,
          label: item.name_taek,
        }));
        setType(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const SS = 2;
  const handleGetUpdate2 = () => {
   
    axios
      .get(`http://localhost:5000/view/togetherjoin/${SS}`)
      .then((response) => {
        const data = response.data.map((item) => ({
          id: item.id_taek,
          label: item.name_taek,
        }));
        setSelectedTypes(data); // Set the initial selected types
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleGetType = () => {
    axios
      .get(`http://localhost:5000/typenovel`)
      .then((response) => {
        const data = response.data.map((item) => ({
          id: item.id_type,
          label: item.name_type,
        }));
        setType2(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const UserGet = () => {
    axios
      .get("http://localhost:5000/novelall2/2")
      .then((response) => {
        const data = response.data[0];
        const data2 = {
          id: data.id_type,
          label: data.name_type,
        };
        console.log("LLL", data2);
        setSelectedTypeNovel(data2);
        setTagnovel(data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    UserGet();
    handleGetType();
    handleGetUpdate();
    handleGetUpdate2();
  }, []);

  const handleSave = () => {
    const dataToSave = selectedTypes.map((item) => ({
      id_novel: SS,
      id_taek: item.id,
    }));

    axios
      .post(`http://localhost:5000/create/together`, { dataToSave ,id_novel: SS})
      .then((response) => {
        console.log("Data saved successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });

    if (selectedTypeNovel && selectedTypeNovel.id !== datanovel.id_type) {
      axios
        .post(`http://localhost:5000/update/novel/type`, {
          id_novel: 2,
          id_type: selectedTypeNovel.id,
        })
        .then((response) => {
          console.log("Type updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating type:", error);
        });
    }
  };

  const handleDelete = (tag) => {
    const newSelectedTypes = selectedTypes.filter((item) => item.id !== tag.id);
    setSelectedTypes(newSelectedTypes);

    axios
      .post(`http://localhost:5000/delete/together`, {
        id_novel: 2,
        id_taek: tag.id,
      })
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  // Filter out selected options to prevent duplicates
  const availableOptions = datatype.filter(
    (option) => !selectedTypes.some((selected) => selected.id === option.id)
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Autocomplete
        multiple
        disablePortal
        id="combo-box-tag"
        options={availableOptions}
        getOptionLabel={(option) => option.label}
        value={selectedTypes}
        onChange={(event, newValue) => {
          setSelectedTypes(newValue);
        }}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={option.id}
              label={option.label}
              {...getTagProps({ index })}
              onDelete={() => handleDelete(option)}
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label="Tag" variant="outlined" />
        )}
      />
      <Autocomplete
        disablePortal
        id="combo-box-type"
        options={datatype2}
        getOptionLabel={(option) => option.label}
        sx={{ width: "70%", marginLeft: 2 }}
        value={selectedTypeNovel}
        onChange={(event, newValue) => {
          setSelectedTypeNovel(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Type Novel" variant="outlined" />
        )}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Box>
  );
}
