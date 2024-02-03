import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    showAccountModal: false,
  },
  reducers: {
    setShowAccountModal(state, action) {
      state.showAccountModal = action.payload;
    },
  },
});

export const { setShowAccountModal } = commonSlice.actions;

export default commonSlice.reducer;
