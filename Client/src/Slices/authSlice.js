import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async (credentials, thunkAPI) => {
		const res = await fetch("http://localhost:4000/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(credentials),
		});
		const data = await res.json();
		if (!res.ok) return thunkAPI.rejectWithValue(data.error);
		return data.token;
	}
);

const initialState = {
	token: null,
	user: null,
	status: "idle",
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout(state) {
			state.token = null;
			state.user = null;
			state.status = "idle";
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.token = action.payload;
				state.user = jwtDecode(action.payload);
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload || action.error.message;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
