const initialState = {
  todoList: [],
  error: null, // has two properties: message and status
  isLoading : false
};

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TODO_SUCCESS":
      return {
        ...state,
        todoList: action.payload,
      };
    case "ADD_TODO_SUCCESS":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "DELETE_TODO_SUCCESS":
    
      return {
        ...state,
        todoList: state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      )
      };
    case "UPDATE_TODO_SUCCESS":
      return {
        ...state,
         todoList: state.todoList.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      )
      }
    case "TODOLIST_ERROR":
      return {
        ...state, error:action.payload
      };
    case "LOADING":
      return {
        ...state, loading:action.payload 
      }

    default:
      return state;
  }
}
