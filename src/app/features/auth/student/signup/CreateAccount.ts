import { RootState } from "@/app/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountCreationData {
  email?: string;
  password?: string;
  fullname: string;
  gender: string;
  dateOfBirth: string;
}

interface AccountState {
  account: AccountCreationData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AccountState = {
  account: null,
  loading: false,
  error: null,
};

export const createAccount = createAsyncThunk<
  AccountCreationData,
  AccountCreationData,
  { rejectValue: string }
>("student/createAccount", async (data, { rejectWithValue }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data;
  } catch (error) {
    return rejectWithValue("Unable to create account");
  }
});

const createAccountSlice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        createAccount.fulfilled,
        (state, action: PayloadAction<AccountCreationData>) => {
          state.loading = false;
          state.account = action.payload;
          state.error = null;
        }
      )
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        state.account = null;
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Something went wrong";
      });
  },
});

export const selectStudentCreateAccount = (state: RootState) =>
  state.studentCreateAccount;
export default createAccountSlice.reducer;
