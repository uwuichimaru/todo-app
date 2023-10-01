import { taskApi } from "../../app/services/task";
import { createSlice } from "@reduxjs/toolkit";
import { Task } from "@prisma/client";
import { RootState } from "../../app/store";

type InitialState = {
    tasks: Task[] | null
}

const initialState: InitialState = {
    tasks: null
}

const slice = createSlice({
    name: "task",
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(taskApi.endpoints.getAllTasks.matchFulfilled, (state, action) => {
                state.tasks = action.payload;
            })
    }
})

export default slice.reducer;

export const selectTask = (state: RootState) => state.task.tasks;