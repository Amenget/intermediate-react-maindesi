
import { useSelector } from "react-redux";
import { getTodoList } from "../lib/services/todoListService";
import { useEffect } from "react";

export default function TodoList() {

    
    const {todoList, loading ,error} = useSelector(state=> state.todo);

    useEffect(()=>{
    async function getTodos() {
        
      //fetch the todo list from the server
      await getTodoList();
    }
    getTodos();
    },[]);

    if(error){
        return (
          <>
            <div className="w-3/4 mx-auto p-4 border boder-1 rounded-md border-red-400">
              <p className="text-center text-lg font-semibold text-gray-100">
                Error Occured <span className="text-3xl font-bold p-4 text-red-500"> {error.status}</span>
              </p>
              <p className="text-center text-red-600 font-semibold text-md">
                {error.message}
              </p>
            </div>
          </>
        );
    }

    return (
      <>
        <h1 className="text-2xl font-semibold text-center p-8 text-gray-100">
          Todo List
        </h1>
        {loading ? (
          <>
            {" "}
            <p className="text-center text-lg font-semibold text-gray-100">
              Loading ...
            </p>
          </>
        ) : (
          <ul className="w-3/4 mx-auto p-4 border boder-1 rounded-md border-amber-400">
            {todoList.length > 0 ? (
              todoList.map((todo) => (
                <>
                  <li className=" p-8 m-4 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between gap-4 mt-4">
                      <span className="text-lg font-semibold text-gray-100">
                        {todo.title}
                      </span>
                      <div class="flex items-center">
                        <input
                          checked={todo.completed}
                          id="checked-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="checked-checkbox"
                          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Completed
                        </label>
                        <hr className="text-amber-400" />
                      </div>
                    </div>
                  </li>
                </>
              ))
            ) : (
              <p className="text-center text-gray-100 font-bold text-2xl p-8">
                No todo list
              </p>
            )}
          </ul>
        )}
      </>
    );
}