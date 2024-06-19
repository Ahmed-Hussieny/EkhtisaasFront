import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthSlice";

export let ConfigurationStore = configureStore({
    reducer:{
        AuthData : AuthReducer
    }
}) 