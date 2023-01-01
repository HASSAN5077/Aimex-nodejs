import { createSlice } from "@reduxjs/toolkit";
import { AxiosHeaders } from "axios";
import axiosFetch from "../../axios/axios";

const initialState = {
  user: {},
  loading: null,
  error: null,
  isAuthenticatedUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAuthRequest(state) {
      state.loading = true;
      state.isAuthenticatedUser = false;
    },

    userAuthSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticatedUser = true;
    },
    userAuthFail(state, action) {
      state.user = null;
      state.isAuthenticatedUser = false;
      state.error = action.payload;
      state.loading = false;
    },
    clearError(state) {
      // state.user = null;
      state.isAuthenticatedUser = false;
      state.error = null;
      state.loading = false;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticatedUser = false;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { userAuthRequest, userAuthSuccess, userAuthFail,clearUser, clearError } =
  userSlice.actions;
export default userSlice.reducer;

export function login(email, password) {
  return async function signInRequestThunk(dispatch) {
    try {
      dispatch(userAuthRequest());
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axiosFetch.post(
        `/login`,
        { email, password },
        config
      );
      dispatch(userAuthSuccess(data.user));
    } catch (error) {
      console.log(error);
      dispatch(userAuthFail(error.response.data.message));
    }
  };
}
export function signUp(signUpDetails) {
  return async function signUpRequestThunk(dispatch, getState) {
    try {
      dispatch(userAuthRequest());
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axiosFetch.post(`/signup`, signUpDetails, config);
      dispatch(userAuthSuccess(data));
    } catch (error) {
      dispatch(userAuthFail(error.response.data.message));
    }
  };
}
export function loadUser() {
  return async function loadUserThunk(dispatch, getState) {
    try {
      dispatch(userAuthRequest());
      // const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axiosFetch.get("/me");
      dispatch(userAuthSuccess(data));
    } catch (error) {
      // dispatch(userAuthFail(error.response.data.message));
    }
  };
}

export function clearErrors() {
  return async function clearErrorsRequestThunk(dispatch) {
    dispatch(clearError());
  };
}

export function logoutUser(){
  return async function logoutUserRequestThunk(dispatch){
    dispatch(clearUser())
  }
}