import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
		localStorage.setItem("authToken", data.token);
		thunkAPI.dispatch(fetchCurrentUser());
		return data.token;
	}
);

export const fetchCurrentUser = createAsyncThunk(
	"auth/fetchCurrentUser",
	async (_, thunkAPI) => {
		const token = thunkAPI.getState().auth.token;
		const res = await fetch("http://localhost:4000/auth/me", {
			headers: { Authorization: `Bearer ${token}` },
		});
		const data = await res.json();
		if (!res.ok) return thunkAPI.rejectWithValue(data.error);
		return data.user;
	}
);

const initialState = {
	token: localStorage.getItem("authToken"),
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
			localStorage.removeItem("authToken");
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
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload || action.error.message;
			})

			.addCase(fetchCurrentUser.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchCurrentUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
			})
			.addCase(fetchCurrentUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload || action.error.message;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
