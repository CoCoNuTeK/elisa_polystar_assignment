import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/user";

interface UserState {
  userList: User[];
}

const initialState: UserState = {
  userList: [],
};

const userSlice = createSlice({
  name: "users", 
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      console.log("🔄 Setting users in Redux:", action.payload); 
      state.userList = [...action.payload];
      console.log("✅ Set Redux state:", state.userList);
    },
    addUser: (state, action: PayloadAction<User>) => {
        console.log(`➕ Adding new user ID: ${action.payload.id}`);
        console.log("Before add:", JSON.parse(JSON.stringify(state.userList))); 
      
        state.userList.push(action.payload);
      
        console.log("✅ Updated Redux state:", JSON.parse(JSON.stringify(state.userList))); 
    },      
    updateUser: (state, action: PayloadAction<User>) => {
        console.log(`✏️ Updating user ID: ${action.payload.id}`);
        console.log("Before update:", JSON.parse(JSON.stringify(state.userList)));
      
        const index = state.userList.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.userList[index] = { ...state.userList[index], ...action.payload };
        }
      
        console.log("✅ Updated users list:", JSON.parse(JSON.stringify(state.userList)));
    },      
    deleteUser: (state, action: PayloadAction<number>) => {
        console.log(`🗑️ Reducer triggered: Deleting user ID: ${action.payload}`);
        console.log("Before delete:", JSON.parse(JSON.stringify(state.userList)));
      
        const index = state.userList.findIndex(user => user.id === action.payload);
        if (index !== -1) {
          state.userList.splice(index, 1);
        }
      
        console.log("After delete:", JSON.parse(JSON.stringify(state.userList)));
    },      
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
