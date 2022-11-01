import { ReactElement } from "react";
import { createMemoryRouter, Outlet } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";

const RouteWrapper = styled.div``;

const Route = styled.div`
  height: 1500px;
`;

export const memoryRouter = (children: ReactElement) =>
  createMemoryRouter(
    [
      {
        path: "/",
        element: <Layout>{children}</Layout>,
        children: [
          {
            element: (
              // To add extra styles to 'content' area of the entire layout
              <RouteWrapper>
                <Outlet />
              </RouteWrapper>
            ),
            children: [
              {
                index: true,
                path: "/home",
                element: <Route>Home Content</Route>,
              },
              {
                path: "/about",
                element: <Route>About Content</Route>,
              },
              {
                path: "*",
                element: <Route>404 Not Found</Route>,
              },
            ],
          },
        ],
      },
    ],
    { initialEntries: ["/home"], initialIndex: 0 }
  );
