import React from "react";
import ReactDOM from "react-dom/client";

import RouterProvider from "./routers/RouterProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider />
    </React.StrictMode>
);
