import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     email: null,
     token: null,
     id: null,
     nameUser: 'Guest',
     alertAuth:'',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.nameUser = action.payload.nameUser;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.nameUser = null;
        },

        setAlertAuth(state, action) {
            state.alertAuth = action.payload
        }
    }
})

export const {setUser, removeUser, setAlertAuth} = userSlice.actions;

export default userSlice.reducer;