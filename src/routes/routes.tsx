import React from "react";
import Entry from "../pages/Entry";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Sandbox from "../pages/Sandbox";
import Travel from "../pages/Travel";
import { AppLayout } from "@cloudscape-design/components";

export const routes = [
  {
    path: `/`,
    element: <Entry />,
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
