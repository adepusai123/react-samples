import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Prompt Name", flex: 1 },
  { field: "category", headerName: "Category", flex: 1 },
];

const Prompts: React.FC = () => {
  const navigate = useNavigate();
  const prompts = useSelector((state: RootState) => state.prompts.list);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5">Prompts</Typography>
        <Button variant="contained" onClick={() => navigate("/studio/prompts/new")}>
          Add New
        </Button>
      </Box>
      <DataGrid rows={prompts} columns={columns} autoHeight />
    </Box>
  );
};

export default Prompts;
