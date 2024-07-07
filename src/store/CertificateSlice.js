import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// &----------------------------------------- Add Certificate --------------------------------------------
export const HandelAddCertificate = createAsyncThunk(
  "Certificate/HandelAddCertificate",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/Certificate/AddCertificate",
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
// &----------------------------------------- Update Certificate --------------------------------------------
export const HandelUpdateCertificate = createAsyncThunk(
  "Certificate/HandelUpdateCertificate",
  async ({formData,id}) => {
    try {
      const body = formData
      const response = await axios.put(
        `http://localhost:3000/Certificate/UpdateCertificate/${id}`,
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
// &----------------------------------------- Delete Certificate --------------------------------------------
export const HandelDeleteCertificate = createAsyncThunk(
  "Certificate/HandelDeleteCertificate",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/Certificate/DeleteCertificate/${id}`,
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
// &----------------------------------------- Add  Direct Education  --------------------------------------------
export const HandelAddDirectEducation = createAsyncThunk(
    "Certificate/HandelAddDirectEducation",
    async ({formData,id}) => {
      try {
        const response = await axios.post(
          `http://localhost:3000/directEducation/AddDirectEducation/${id}`,
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
  // &----------------------------------------- Update  Direct Education  --------------------------------------------
export const HandelUpdateDirectEducation = createAsyncThunk(
  "Certificate/HandelUpdateDirectEducation",
  async ({formData,id}) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/directEducation/UpdateDirectEducation/${id}`,
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
  // &----------------------------------------- Delete  Direct Education  --------------------------------------------
  export const HandelDeleteDirectEducation = createAsyncThunk(
    "Certificate/HandelDeleteDirectEducation",
    async (id) => {
      try {
        const response = await axios.delete(
          `http://localhost:3000/directEducation/DeleteDirectEducation/${id}`,
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
// &----------------------------------------- Add Self Education  --------------------------------------------
export const HandelAddSelfEducation = createAsyncThunk(
    "Certificate/HandelAddSelfEducation",
    async ({formData,id}) => {
      try {
        const response = await axios.post(
          `http://localhost:3000/selfEducation/AddSelfEducation/${id}`,
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
  // &----------------------------------------- Update Self Education  --------------------------------------------
export const HandelUpdateSelfEducation = createAsyncThunk(
  "Certificate/HandelUpdateSelfEducation",
  async ({formData,id}) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/selfEducation/UpdateSelfEducation/${id}`,
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
  // &----------------------------------------- Delete Self Education  --------------------------------------------
  export const HandelDeleteSelfEducation = createAsyncThunk(
    "Certificate/HandelDeleteSelfEducation",
    async (id) => {
      try {
        const response = await axios.delete(
          `http://localhost:3000/selfEducation/DeleteSelfEducation/${id}`,
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
// &----------------------------------------- Add Support Side  --------------------------------------------
export const HandelAddSupportSide = createAsyncThunk(
    "Certificate/HandelAddSupportSide",
    async ({formData,id}) => {
      try {
        const response = await axios.post(
          `http://localhost:3000/supportSide/AddSupportSide/${id}`,
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
// &----------------------------------------- Update Support Side  --------------------------------------------
export const HandelUpdateSupportSide = createAsyncThunk(
  "Certificate/HandelUpdateSupportSide",
  async ({formData,id}) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/supportSide/UpdateSupportSide/${id}`,
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
// &----------------------------------------- Delete Support Side  --------------------------------------------
export const HandelDeleteSupportSide = createAsyncThunk(
  "Certificate/HandelDeleteSupportSide",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/supportSide/DeleteSupportSide/${id}`,
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
// &----------------------------------------- Get Single Certificate  --------------------------------------------
export const HandelGetSingleCertificate = createAsyncThunk(
  "Certificate/HandelGetSingleCertificate",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Certificate/GetSinglecertificate/${id}`,
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
const AuthSlice = createSlice({
  name: "Certificate",
  initialState: {
    SpecialtyData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // ^ HandelAddCertificate
    builder.addCase(HandelAddCertificate.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelAddCertificate.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^HandelUpdateCertificate
    builder.addCase(HandelUpdateCertificate.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelUpdateCertificate.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^ HandelDeleteCertificate
    builder.addCase(HandelDeleteCertificate.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelDeleteCertificate.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^HandelAddDirectEducation
    builder.addCase(HandelAddDirectEducation.fulfilled, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelAddDirectEducation.rejected, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.error(action.payload.Data);
      });
    //^ HandelUpdateDirectEducation
    builder.addCase(HandelUpdateDirectEducation.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelUpdateDirectEducation.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^ HandelDeleteDirectEducation
    builder.addCase(HandelDeleteDirectEducation.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelDeleteDirectEducation.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^HandelAddSelfEducation
    builder.addCase(HandelAddSelfEducation.fulfilled, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelAddSelfEducation.rejected, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.error(action.payload.Data);
      });
    // ^HandelUpdateSelfEducation
    builder.addCase(HandelUpdateSelfEducation.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelUpdateSelfEducation.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
    //^ HandelDeleteSelfEducation
    builder.addCase(HandelDeleteSelfEducation.fulfilled, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.log(action.payload.Data);
    });
    builder.addCase(HandelDeleteSelfEducation.rejected, (state, action) => {
      state.SpecialtyData = action.payload.Data;
      console.error(action.payload.Data);
    });
      //^ HandelAddSupportSide
      builder.addCase(HandelAddSupportSide.fulfilled, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelAddSupportSide.rejected, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.error(action.payload.Data);
      });
      //^ HandelUpdateSupportSide
      builder.addCase(HandelUpdateSupportSide.fulfilled, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelUpdateSupportSide.rejected, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.error(action.payload.Data);
      });
      //^ HandelDeleteSupportSide
      builder.addCase(HandelDeleteSupportSide.fulfilled, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelDeleteSupportSide.rejected, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.error(action.payload.Data);
      });
      //^ HandelGetSingleCertificate
      builder.addCase(HandelGetSingleCertificate.fulfilled, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.log(action.payload.Data);
      });
      builder.addCase(HandelGetSingleCertificate.rejected, (state, action) => {
        state.SpecialtyData = action.payload.Data;
        console.error(action.payload.Data);
      });
  },
});

export const AuthReducer = AuthSlice.reducer;
