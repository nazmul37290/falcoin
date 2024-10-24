import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../pages/Homepage";

const Routes= createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            }
        ]

    }
])

export default Routes;