import { createBrowserRouter } from "react-router-dom";

import Layout from "@/Layout";

import Home from "@/pages/Home";
import Detail from "@/pages/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/character/:id", element: <Detail /> },
        ],
    },
    {
        path: "*",
        element: <h1>404</h1>,
    },
]);

export default router;
