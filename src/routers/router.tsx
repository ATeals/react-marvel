import { createBrowserRouter } from "react-router-dom";

import Layout from "@/Layout";

import Home from "@/pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/character/:id", element: <h1>detail</h1> },
        ],
    },
    {
        path: "*",
        element: <h1>404</h1>,
    },
]);

export default router;
