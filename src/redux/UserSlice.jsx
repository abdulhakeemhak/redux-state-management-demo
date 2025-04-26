import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
    name : 'UsersList',
    initialState,
    reducers : {
        addUser(state,action){
            state.push(action.payload)
        },
        deleteUser(state,action){
            const deleteIndex = action.payload;
            return state.filter((user, index)=> index !== deleteIndex)
        },
        editUser(state, action) {
            const { index, newName } = action.payload;
            if (state[index]) {
                state[index] = newName; 
            }
        }
    }
});
export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer