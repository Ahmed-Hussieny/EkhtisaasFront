import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// &----------------------------------------- Add Specialist --------------------------------------------
export const HandelAddSpecialist = createAsyncThunk(
  "Specialist/HandelAddSpecialist",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/Specialist/AddSpecialist",
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
// &----------------------------------------- Update Specialist --------------------------------------------
export const HandelUpdateSpecialist = createAsyncThunk(
    "Specialist/HandelUpdateSpecialist",
    async ({formdata,id}) => {
        let body = formdata
      try {
        const response = await axios.put(
          `http://localhost:3000/Specialist/updateSpecialist/${id}`,
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
  // &----------------------------------------- Delete Specialist --------------------------------------------
export const HandeldeleteSpecialist = createAsyncThunk(
    "Specialist/HandeldeleteSpecialist",
    async (id) => {
      try {
        const response = await axios.delete(
          `http://localhost:3000/Specialist/deleteSpecialist/${id}`,
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
// &----------------------------------------- Get All Specialist --------------------------------------------
export const HandelGetAllSpecialists = createAsyncThunk(
    "Specialist/HandelGetAllSpecialists",
    async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/Specialist/GetAllSpecialists",
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
// &----------------------------------------- Get Single Specialist --------------------------------------------
export const HandelGetSingleSpecialist = createAsyncThunk(
    "Specialist/HandelGetSingleSpecialist",
    async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/Specialist/GetSingleSpecialist/${id}`,
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
const SpecialistSlice = createSlice({
    name: "Specialist",
    initialState: {
      AddSpecialistData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
      // ^ Handel Add Specialist
      builder.addCase(HandelAddSpecialist.fulfilled, (state, action) => {
        state.AddSpecialistData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelAddSpecialist.rejected, (state, action) => {
        state.AddSpecialistData = action.payload.Data;
        console.error(action.payload.Data);
      });
    // ^  HandelUpdateSpecialist
    builder.addCase(HandelUpdateSpecialist.fulfilled, (state, action) => {
        state.AddSpecialistData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelUpdateSpecialist.rejected, (state, action) => {
        state.AddSpecialistData = action.payload.Data;
        console.error(action.payload.Data);
      });
      //^HandelGetAllSpecialists
      builder.addCase(HandelGetAllSpecialists.fulfilled, (state, action) => {
        state.AddSpecialistData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelGetAllSpecialists.rejected, (state, action) => {
        state.AddSpecialistData = action.payload.Data;
        console.error(action.payload.Data);
      });
      //^HandelGetSingleSpecialist
      builder.addCase(HandelGetSingleSpecialist.fulfilled, (state, action) => {
        state.AddSpecialistData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelGetSingleSpecialist.rejected, (state, action) => {
        state.AddSpecialistData = action.payload.Data;
        console.error(action.payload.Data);
      });

    // ^  HandeldeleteSpecialist
    builder.addCase(HandeldeleteSpecialist.fulfilled, (state, action) => {
        state.AddSpecialistData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandeldeleteSpecialist.rejected, (state, action) => {
        state.AddSpecialistData = action.payload.Data;
        console.error(action.payload.Data);
      });
    }
})


export const SpecialistReducer = SpecialistSlice.reducer;