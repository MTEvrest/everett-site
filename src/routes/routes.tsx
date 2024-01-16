import React from "react";
import Home from "../pages/index";
import About from "../pages/about";
import Projects from "../pages/projects";
import Sandbox from "../pages/sandbox";
import Travel from "../pages/travel";
import { AppLayout } from "@cloudscape-design/components";

export const routes = [
  {
    path: `/`,
    element: <Home />,
  },
  {
    path: `about`,
    element: <AppLayout content={<About />} />,
  },
  {
    path: `sandbox`,
    element: <AppLayout content={<Sandbox />} />,
  },
  {
    path: `travel`,
    element: <AppLayout content={<Travel />} />,
  },
  {
    path: `projects`,
    element: <AppLayout content={<Projects />} />,
  },
];
