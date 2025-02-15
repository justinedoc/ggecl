import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from "../../../../store";

export interface SignupDataType {
  email: string;
  password: string;
  fullname?: string;
  gender?: string;
  dateOfBirth?: Date;
}

export interface SignupFormDataState {
  data: Partial<SignupDataType>;
}

const initialState: SignupFormDataState = { data: { email: "", password: "" } };

const formData = createSlice({
  name: "signupFormData",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<SignupDataType>>) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const selectFormData = (state: RootState) => state.signupFormData.data;
export const { updateFormData } = formData.actions;
export default formData.reducer;
