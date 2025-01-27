import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterReducer";
import todoListReducer from "./features/todo/todoReducer";




const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoListReducer
    }
});
const dispatch = store.dispatch;
export { dispatch };
export default store;