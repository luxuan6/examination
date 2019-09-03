import React from "react";
import Login from "../views/login/login"
import Main from "../views/main/home"


const RouteConfig = [
  {
    children: [
      {
        component: React.lazy(() => import("../views/main/home")),
        path: "/main/home",
      },
      {
        path: "/main",
        redirect: "/main/home"
      } 
    ],
    component: React.lazy(() => import("../views/main/home")),
    path: "/main",

  },
  {
    component: React.lazy(() => import("../views/login/login")),
    path: "/login"
  },
  {
    path: "/",
    redirect: "/login"
  }
];

export default RouteConfig;
