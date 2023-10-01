import { Task } from "@prisma/client";
import { api } from './api'

export type TaskData = Omit<Task, "id">;
type ResponseTaskData = Task;

export const taskApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllTasks: builder.query<Task[], void>({
            query: () => ({
                url: '/tasks/',
                method: "GET",
            }),
            providesTags: ['Post']
        }),
        addTask: builder.mutation<ResponseTaskData, TaskData>({
            query: (taskData:TaskData) => ({
                url: "/tasks/addTask",
                method: "POST",
                body: taskData,
            }),
            invalidatesTags: ['Post'],
            
        }),
        important: builder.query<Task[], void>({
            query: () => ({
                url: '/tasks/important',
                method: "GET",
            }),
            providesTags: ['Post']
        }),
        myDay: builder.query<ResponseTaskData, TaskData>({
            query: () => ({
                url: "/tasks/myDay",
                method: "GET"
            }),
        }),
        planned: builder.query<ResponseTaskData, TaskData>({
            query: () => ({
                url: "/tasks/planned",
                method: "GET"
            })
        }),
        updated: builder.mutation<ResponseTaskData, TaskData>({
            query: (taskData) => ({
                url: '/tasks/update',
                method: 'POST',
                body: taskData,
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const { useGetAllTasksQuery, useAddTaskMutation, useImportantQuery, usePlannedQuery, useUpdatedMutation } = taskApi;

export const {
    endpoints: { getAllTasks, addTask, important, myDay, planned } } = taskApi;