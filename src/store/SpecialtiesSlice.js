import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// &----------------------------------------- Add Main Specialty --------------------------------------------
export const HandelAddMainSpecialty = createAsyncThunk(
  "Specialties/HandelAddMainSpecialty",
  async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/MainSpecialty/AddMainSpecialty`,
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
// &----------------------------------------- Update Main Specialty --------------------------------------------
export const HandelUpdateMainSpecialty = createAsyncThunk(
  "Specialties/HandelUpdateMainSpecialty",
  async ({formData,id}) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/MainSpecialty/updateMainSpecialty/${id}`,
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
// &----------------------------------------- Delete Main Specialty --------------------------------------------
export const HandelDeleteMainSpecialty = createAsyncThunk(
  "Specialties/HandelDeleteMainSpecialty",
  async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/MainSpecialty/DeleteMainSpecialty/${id}`,
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
// &----------------------------------------- Get Single Main Specialty --------------------------------------------
export const HandelGetSingleMainSpecialty = createAsyncThunk(
  "Specialties/HandelGetAllMainSpecialty",
  async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/MainSpecialty/GetSingleMainSpecialty/${id}`,
        {
          headers: {
            accesstoken: "prefixToken_" + localStorage.getItem("Token"),
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
// &----------------------------------------- Get All Main Specialty --------------------------------------------
export const HandelGetAllMainSpecialty = createAsyncThunk(
  "Specialties/HandelGetAllMainSpecialty",
  async () => {
    try {
      const response = await axios.get(
       `${process.env.REACT_APP_BASE_URL}/MainSpecialty/GetAllMainSpecialties`,
        {
          headers: {
            accesstoken: "prefixToken_" + localStorage.getItem("Token"),
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


// * ==================================== SUB ==========================================
// &----------------------------------------- ADD SUB Specialty --------------------------------------------
export const HandelAddSubSpecialty = createAsyncThunk(
  "Specialties/HandelAddSubSpecialty",
  async (formData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/SubSpecialty/AddSubSpecialty`,
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
// &----------------------------------------- Update SUB Specialty --------------------------------------------
export const HandelUpdateSubSpecialty = createAsyncThunk(
  "Specialties/HandelUpdateSubSpecialty",
  async ({formData,id}) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/SubSpecialty/updateSubSpecialty/${id}`,
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
// &----------------------------------------- Delete SUB Specialty --------------------------------------------
export const HandelDeleteSubSpecialty = createAsyncThunk(
  "Specialties/HandelDeleteSubSpecialty",
  async (id) => {
    try {
      const response = await axios.delete(
       `${process.env.REACT_APP_BASE_URL}/SubSpecialty/DeleteSubSpecialty/${id}`,
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
// &----------------------------------------- Get All Sub Specialty --------------------------------------------
export const HandelGetAllSubSpecialty = createAsyncThunk(
  "Specialties/HandelGetAllSubSpecialty",
  async () => {
    try {
      const response = await axios.get(
       `${process.env.REACT_APP_BASE_URL}/SubSpecialty/GetAllSubSpecialties`,
        {
          headers: {
            accesstoken: "prefixToken_" + localStorage.getItem("Token"),
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
// &----------------------------------------- Get Single Sub Specialty --------------------------------------------
export const HandelGetSingleSubSpecialty = createAsyncThunk(
  "Specialties/HandelGetSingleSubSpecialty",
  async (id) => {
    try {
      const response = await axios.get(
       `${process.env.REACT_APP_BASE_URL}/SubSpecialty/GetSingleSubSpecialty/${id}`,
        {
          headers: {
            accesstoken: "prefixToken_" + localStorage.getItem("Token"),
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
const AuthSlice = createSlice({
  name: "Specialties",
  initialState: {
    SpecialtyData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // ^ Add Main Specialty
    builder.addCase(HandelAddMainSpecialty.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelAddMainSpecialty.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^ HandelUpdateMainSpecialty
    builder.addCase(HandelUpdateMainSpecialty.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelUpdateMainSpecialty.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^ HandelDeleteMainSpecialty
    builder.addCase(HandelDeleteMainSpecialty.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelDeleteMainSpecialty.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    // ^ Get All Main Specialty
    builder.addCase(HandelGetAllMainSpecialty.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelGetAllMainSpecialty.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^HandelGetSingleMainSpecialty
    builder.addCase(HandelGetSingleMainSpecialty.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelGetSingleMainSpecialty.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //* ================= SUB ===========================
    //^ HandelAddSubSpecialty
    builder.addCase(HandelAddSubSpecialty.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelAddSubSpecialty.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^ HandelUpdateSubSpecialty
    builder.addCase(HandelUpdateSubSpecialty.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelUpdateSubSpecialty.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^ HandelGetAllSubSpecialty
    builder.addCase(HandelGetAllSubSpecialty.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelGetAllSubSpecialty.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^ HandelDeleteMSubSpecialty
    builder.addCase(HandelDeleteSubSpecialty.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelDeleteSubSpecialty.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^ HandelGetSingleSubSpecialty
    builder.addCase(HandelGetSingleSubSpecialty.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelGetSingleSubSpecialty.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
  },
});

export const AuthReducer = AuthSlice.reducer;
