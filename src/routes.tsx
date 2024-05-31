import { Suspense} from "react";
import { RouteObject } from "react-router-dom";
import Home from "./App/Dashboard/Home";
import Layout from "./App/Layout/Layout";



export const routes: RouteObject[] = [
    {
        path: '/',
        element: (
          <Suspense fallback={"Loading..."}>
            <Layout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={"Loading..."}>
                <Home />
              </Suspense>
            )
          },
        ] 
    }
]   