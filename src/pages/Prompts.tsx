import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Prompt Name", flex: 1 },
  { field: "category", headerName: "Category", flex: 1 },
];

const rows = [
  { id: 1, name: "Generate Report", category: "Business" },
  { id: 2, name: "Write a Story", category: "Creative" },
  { id: 3, name: "Code Review", category: "Tech" },
];

const Prompts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5">Prompts</Typography>
        <Button variant="contained" onClick={() => navigate("/studio/prompts/new")}>
          Add New
        </Button>
      </Box>
      <DataGrid rows={rows} columns={columns} autoHeight />
    </Box>
  );
};

export default Prompts;
