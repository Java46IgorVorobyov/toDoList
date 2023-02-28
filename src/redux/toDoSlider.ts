import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const todoList: {id: string, title: string}[] = [];

export const toDoSlider = createSlice({
    name: 'toDo',
    initialState: 
        todoList,
    reducers: {
        addToDO: (state, action: PayloadAction<{title: string}>) => {
            let newToDoList = {
                id: Math.random().toString(),
                title: action.payload.title,
            }
            return [...state, newToDoList];
        },
        deleteToDo: (state, action: PayloadAction<{id: string}>) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        editToDo: (state, action: PayloadAction<{id: string, title: string}>) => {
            return state.map((item) => 
            item.id === action.payload.id ? action.payload : item);
        }
    }
})

export const {addToDO, deleteToDo, editToDo} = toDoSlider.actions;

export default toDoSlider.reducer;