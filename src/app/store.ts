import { configureStore } from "@reduxjs/toolkit";
import signupFormData from "./features/auth/student/signup/SignupTabsPagination";
import studentCreateAccount from "./features/auth/student/signup/CreateAccount";

const store = configureStore({
  reducer: {
    signupFormData,
    studentCreateAccount,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
