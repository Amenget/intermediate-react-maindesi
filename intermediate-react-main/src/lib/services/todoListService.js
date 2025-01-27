import axios from "axios";
import { dispatch } from "../store";

//get todo list from server
export async function getTodoList() {
    dispatch({
        type: "LOADING",
        payload: true
    })
    try {
        const todoLists = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        
        if(todoLists.status == 200){
             dispatch({
               type: "GET_TODO_SUCCESS",
               payload: todoLists.data,
             });
            
        }
        else{
             dispatch({
               type: "TODOLIST_ERROR",
               payload: {
                 status: todoLists.status,
                 message: todoLists.code,
               },
             });
        }
    } catch (error) {
       console.error(error); 
        dispatch({
          type: "TODOLIST_ERROR",
          payload: {
            status: error.status,
            message: error.code
          },
        });
    }
    finally{
        dispatch({
          type: "LOADING",
          payload: false,
        });
    }
}

//add todo list to server

//delete todo list from server

//update todo list on server