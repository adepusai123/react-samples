import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Prompt {
  id: number;
  name: string;
  category: string;
  multiSelect: string[];
  description: string;
}

interface PromptsState {
  list: Prompt[];
}

const initialState: PromptsState = {
  list: [
    { id: 1, name: "Generate Report", category: "Business", multiSelect: ["Option 1"], description: "Automated business report" },
    { id: 2, name: "Write a Story", category: "Creative", multiSelect: ["Option 2"], description: "Generate a short story" },
  ],
};

const promptsSlice = createSlice({
  name: "prompts",
  initialState,
  reducers: {
    addPrompt: (state, action: PayloadAction<Prompt>) => {
      state.list.push({ ...action.payload, id: state.list.length + 1 });
    },
  },
});

export const { addPrompt } = promptsSlice.actions;
export default promptsSlice.reducer;
