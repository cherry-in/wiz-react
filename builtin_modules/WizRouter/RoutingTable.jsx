import React from "react";
import Landing from "page.landing";
import Main from "page.main";
import Search from "page.search";

const RouteTable = [
    {
        path: "/main",
        element: <Main />,
    },
    {
        path: "/search",
        element: <Search />,
    }, {
        path: "/landing",
        element: <Landing />
    },
];

export const RedirectTable = [
    {
        from: "*",
        to: "/main",
    },
];

export default RouteTable;
