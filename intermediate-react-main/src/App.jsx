import "./App.css";
import ParentComponent from "./components/parent";
import Contact from "./components/contact";
import News from "./components/news";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from "./components/layout";
import Counter from "./components/counter";
import Register from "./components/register";
import TodoList from "./components/todoList";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        index: true,
        element: <ParentComponent />,
      },

      {
        path: "news",
        element: <News />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
        {
          path:"Register",
          element: <Register/>
        },
      {
        path: "counter",
        element: <Counter />
      },
      {
        path:"todo",
        element:<TodoList/>
      }
    ],
  },
]);
function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
