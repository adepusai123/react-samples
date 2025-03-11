import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = ["Business", "Creative", "Tech"];
const multiSelectOptions = ["Option 1", "Option 2", "Option 3"];

const NewPrompt: React.FC = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [multiSelect, setMultiSelect] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, category, multiSelect, description });
    navigate("/studio/prompts");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        New Prompt
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Prompt Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Select
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
          sx={{ mb: 2 }}
        >
          <MenuItem value="" disabled>Select Category</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
        <Select
          fullWidth
          multiple
          value={multiSelect}
          onChange={(e) => setMultiSelect(e.target.value as string[])}
          displayEmpty
          sx={{ mb: 2 }}
        >
          <MenuItem value="" disabled>Select Multiple Options</MenuItem>
          {multiSelectOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Save
        </Button>
      </form>
    </Box>
  );
};

export default NewPrompt;
