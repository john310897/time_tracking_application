import { createSlice } from '@reduxjs/toolkit'
const intialState = {
    taskList: []
}
export const taskReducer = createSlice({
    name: 'task',
    initialState: intialState,
    reducers: {
        storeValue(state, action) {
            let data = action.payload
            state.taskList.push(data)
        },
        editValue(state, action) {
            state.taskList[action.payload.index] = action.payload.data
        }
    },
})
export const { storeValue, editValue } = taskReducer.actions;
export default taskReducer.reducer;