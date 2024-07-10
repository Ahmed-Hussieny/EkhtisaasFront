import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// &----------------------------------------- Add Advisor --------------------------------------------
export const HandelAddAdvisor = createAsyncThunk(
  "Advisor/HandelAddAdvisor",
  async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/Advisor/AddAdvisor`,
        formData,
        {
          headers: {
            accessToken: "prefixToken_" + localStorage.getItem("Token"),
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      return error.response || { error: "An error occurred" };
    }
  }
);
// &----------------------------------------- Update Advisor --------------------------------------------
export const HandelUpdateAdvisor = createAsyncThunk(
    "Advisor/HandelUpdateAdvisor",
    async ({formdata,id}) => {
        let body = formdata
      try {
        const response = await axios.put(
         `${process.env.REACT_APP_BASE_URL}/Advisor/updateAdvisor/${id}`,
          body,
          {
            headers: {
              accessToken: "prefixToken_" + localStorage.getItem("Token"),
            },
          }
        );
  
        return response.data;
      } catch (error) {
        console.error("Error during login:", error);
        return error.response || { error: "An error occurred" };
      }
    }
  );
  // &----------------------------------------- Delete Advisor --------------------------------------------
export const HandeldeleteAdvisor = createAsyncThunk(
    "Advisor/HandeldeleteAdvisor",
    async (id) => {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_BASE_URL}/Advisor/deleteAdvisor/${id}`,
          {
            headers: {
              accessToken: "prefixToken_" + localStorage.getItem("Token"),
            },
          }
        );
  
        return response.data;
      } catch (error) {
        console.error("Error during login:", error);
        return error.response || { error: "An error occurred" };
      }
    }
  );
// &----------------------------------------- Get All Advisor --------------------------------------------
export const HandelGetAllAdvisors = createAsyncThunk(
    "Advisor/HandelGetAllAdvisors",
    async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/Advisor/GetAllAdvisors`
          // ,
          // {
          //   headers: {
          //     accessToken: "prefixToken_" + localStorage.getItem("Token"),
          //   },
          // }
        );
  
        return response.data;
      } catch (error) {
        console.error("Error during login:", error);
        return error.response || { error: "An error occurred" };
      }
    }
  );
// &----------------------------------------- Get Single Advisor --------------------------------------------
export const HandelGetSingleAdvisor = createAsyncThunk(
    "Advisor/HandelGetSingleAdvisor",
    async (id) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/Advisor/GetSingleAdvisor/${id}`
          // ,
          // {
          //   headers: {
          //     accessToken: "prefixToken_" + localStorage.getItem("Token"),
          //   },
          // }
        );
  
        return response.data;
      } catch (error) {
        console.error("Error during login:", error);
        return error.response || { error: "An error occurred" };
      }
    }
  );
const AdvisorSlice = createSlice({
    name: "Advisor",
    initialState: {
      AddAdvisorData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
      // ^ Handel Add Advisor
      builder.addCase(HandelAddAdvisor.fulfilled, (state, action) => {
        state.AddAdvisorData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelAddAdvisor.rejected, (state, action) => {
        state.AddAdvisorData = action.payload.Data;
        console.error(action.payload.Data);
      });
    // ^  HandelUpdateAdvisor
    builder.addCase(HandelUpdateAdvisor.fulfilled, (state, action) => {
        state.AddAdvisorData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelUpdateAdvisor.rejected, (state, action) => {
        state.AddAdvisorData = action.payload.Data;
        console.error(action.payload.Data);
      });
      //^HandelGetAllAdvisors
      builder.addCase(HandelGetAllAdvisors.fulfilled, (state, action) => {
        state.AddAdvisorData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelGetAllAdvisors.rejected, (state, action) => {
        state.AddAdvisorData = action.payload.Data;
        console.error(action.payload.Data);
      });
      //^HandelGetSingleAdvisor
      builder.addCase(HandelGetSingleAdvisor.fulfilled, (state, action) => {
        state.AddAdvisorData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelGetSingleAdvisor.rejected, (state, action) => {
        state.AddAdvisorData = action.payload.Data;
        console.error(action.payload.Data);
      });

    // ^  HandeldeleteAdvisor
    builder.addCase(HandeldeleteAdvisor.fulfilled, (state, action) => {
        state.AddAdvisorData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandeldeleteAdvisor.rejected, (state, action) => {
        state.AddAdvisorData = action.payload.Data;
        console.error(action.payload.Data);
      });
    }
})


export const AdvisorReducer = AdvisorSlice.reducer;