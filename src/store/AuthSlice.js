import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// &----------------------------------------- Login --------------------------------------------

export const HandelLogin = createAsyncThunk(
  "auth/handleLogin",
  async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/signIn`,
        formData
      );

      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      return error.response || { error: "An error occurred" };
    }
  }
);

// &----------------------------------------- Register --------------------------------------------

export const HandelRegister = createAsyncThunk(
  "auth/handleregister",
  async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/signUp`,
        formData
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred during registration:", error.response.data);
      return error.response.data;
    }
  }
);

// &----------------------------------------- Verify Email --------------------------------------------

export const HandelVerifyEmail = createAsyncThunk(
  "auth/handelVerifyEmail",
  async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/verifyEmail`,
        formData
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred during email verification:", error.response.data);
      return error.response.data;
    }
  }
);

// &----------------------------------------- Forget Password --------------------------------------------

export const HandelForgetPassword = createAsyncThunk(
  "auth/handelForgetPassword",
  async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/forgetPassword`,
        formData
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred during password reset:", error.response.data);
      return error.response.data;
    }
  }
);

// &----------------------------------------- OTP --------------------------------------------

export const HandelOTP = createAsyncThunk(
  "auth/handelOTP",
  async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/otpverification`,
        formData
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred during OTP verification:", error.response.data);
      return error.response.data;
    }
  }
);

// &----------------------------------------- Reset Password --------------------------------------------

export const HandelResetPassword = createAsyncThunk(
  "auth/handelResetPassword",
  async (formData) => {
    try {
      const response = await axios.post(
       `${process.env.REACT_APP_BASE_URL}/user/ResetPassword`,
        formData
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred during password reset:", error.response.data);
      return error.response.data;
    }
  }
);
// &============================= HandelGetCountOfVisitors================


export const HandelGetCountOfVisitors = createAsyncThunk(
  "auth/HandelGetCountOfVisitors",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/CountOfVisitors`,
        {
          headers: {
            accessToken: "prefixToken_" + localStorage.getItem("Token"),
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred during Get Count Of Visitors", error.response.data);
      return error.response.data;
    }
  }
);
// &============================= HandelPutCountOfVisitors================
export const HandelPutCountOfVisitors = createAsyncThunk(
  "auth/HandelPutCountOfVisitors",
  async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/CountOfVisitorsForsingle/${id}`,
        {
          headers: {
            accessToken: "prefixToken_" + localStorage.getItem("Token"),
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred during Get Count Of Visitors", error.response.data);
      return error.response.data;
    }
  }
);
// &============================= HandelSendEmailFromHomePage================

export const HandelSendEmailFromHomePage = createAsyncThunk(
  "auth/HandelSendEmailFromHomePage",
  async (formdata) => {
    console.log(formdata);
    const body = formdata
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/sendEmailFromHomePage`,body,
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred during Get Count Of Visitors", error.response.data);
      return error.response.data;
    }
  }
);
// &============================= sendEmailFromContactUsPage================

export const sendEmailFromContactUsPage = createAsyncThunk(
  "auth/sendEmailFromContactUsPage",
  async (formdata) => {
    console.log(formdata);
    const body = formdata
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/sendEmailFromContactUsPage`,body,
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred during Get Count Of Visitors", error.response.data);
      return error.response.data;
    }
  }
);
// &============================= sendEmailFromContactUsPage================

export const HandelPutTheWebsiteInformation = createAsyncThunk(
  "auth/HandelPutTheWebsiteInformation",
  async (formdata) => {
    console.log(formdata);
    const body = formdata
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/PutTheWebsiteInformation`,body,
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred during Puting The Website Information", error.response.data);
      return error.response.data;
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    UserData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // ^ Login
    builder.addCase(HandelLogin.fulfilled, (state, action) => {
      state.UserData = action.payload.userData;
      console.log(action.payload.userData);
    });
    builder.addCase(HandelLogin.rejected, (state, action) => {
      state.UserData = action.payload.userData;
      console.error(action.payload);
    });

    // ^ Register
    builder.addCase(HandelRegister.fulfilled, (state, action) => {
      state.UserData = action.payload;
      console.log(action.payload);
    });
    builder.addCase(HandelRegister.rejected, (state, action) => {
      state.UserData = action.payload.userData;
      console.error(action.payload.userData);
    });

    // ^ Verify Email
    builder.addCase(HandelVerifyEmail.fulfilled, (state, action) => {
      state.UserData = action.payload.userData;
      console.log(action.payload.userData);
    });
    builder.addCase(HandelVerifyEmail.rejected, (state, action) => {
      state.UserData = action.payload.userData;
      console.error(action.payload.userData);
    });

    // ^ Forget Password
    builder.addCase(HandelForgetPassword.fulfilled, (state, action) => {
      state.UserData = action.payload;
      console.log(action.payload);
    });
    builder.addCase(HandelForgetPassword.rejected, (state, action) => {
      state.UserData = action.payload.userData;
      console.error(action.payload.userData);
    });

    // ^ OTP
    builder.addCase(HandelOTP.fulfilled, (state, action) => {
      state.UserData = action.payload.userData;
      console.log(action.payload.userData);
    });
    builder.addCase(HandelOTP.rejected, (state, action) => {
      state.UserData = action.payload.userData;
      console.error(action.payload.userData);
    });

    // ^ Reset Password
    builder.addCase(HandelResetPassword.fulfilled, (state, action) => {
      state.UserData = action.payload.userData;
      console.log(action.payload.userData);
    });
    builder.addCase(HandelResetPassword.rejected, (state, action) => {
      state.UserData = action.payload.userData;
      console.error(action.payload.userData);
    });
     //^HandelGetCountOfVisitors
    builder.addCase(HandelGetCountOfVisitors.fulfilled, (state, action) => {
      state.UserData = action.payload.userData;
      console.log(action.payload.userData);
    });
    builder.addCase(HandelGetCountOfVisitors.rejected, (state, action) => {
      state.UserData = action.payload.userData;
      console.error(action.payload.userData);
      
    });
    //^HandelPutCountOfVisitors
    builder.addCase(HandelPutCountOfVisitors.fulfilled, (state, action) => {
      state.UserData = action.payload.userData;
      console.log(action.payload.userData);
    });
    builder.addCase(HandelPutCountOfVisitors.rejected, (state, action) => {
      state.UserData = action.payload.userData;
      console.error(action.payload.userData);
      
    });
    //^HandelSendEmailFromHomePage
    builder.addCase(HandelSendEmailFromHomePage.fulfilled, (state, action) => {
      state.UserData = action.payload.userData;
      console.log(action.payload.userData);
    });
    builder.addCase(HandelSendEmailFromHomePage.rejected, (state, action) => {
      state.UserData = action.payload.userData;
      console.error(action.payload.userData);
      
    });
    // ^sendEmailFromContactUsPage
    builder.addCase(sendEmailFromContactUsPage.fulfilled, (state, action) => {
      state.UserData = action.payload.userData;
      console.log(action.payload.userData);
    });
    builder.addCase(sendEmailFromContactUsPage.rejected, (state, action) => {
      state.UserData = action.payload.userData;
      console.error(action.payload.userData);
      
    });
  },
});

export const AuthReducer = AuthSlice.reducer;
