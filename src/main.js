import Router from "../app/Router/RouterHandler.js";
import Home from "./pages/Home.js";
import Detail from "./pages/Detail.js";

const routes = {
    "/": { title: "Brawlstars", element: Home },
    "detail/:id": { title: "Detail", element: Detail }
};

export const route = new Router(routes);
