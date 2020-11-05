import DashboardIcon from "@material-ui/icons/Dashboard";
import LayersIcon from "@material-ui/icons/Layers";
import PeopleIcon from "@material-ui/icons/People";
import Dashboard_Context from "./components/Dashboard_Context";
import Dashboard_API from "./components/Dashboard_API";
import Dashboard_Redux from "./components/Dashboard_Redux";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: { DashboardIcon },
    component: Dashboard_Context,
    layout: "/context",
  },
  {
    path: "/redux",
    name: "REdux",
    icon: { LayersIcon },
    component: Dashboard_Redux,
    layout: "/redux",
  },
  {
    path: "/api",
    name: "Dashboard with api.get",
    icon: { PeopleIcon },
    component: Dashboard_API,
    layout: "/api",
  },
];
export default routes;
