import React from 'react'
import { routes } from "./routes";
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
