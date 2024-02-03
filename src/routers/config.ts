import flattenRoutes from "@/utils/router";

const routes = [
  {
    path: "/home",
    component: () => import("@/pages/home"),
    title: "Home",
  },
];

export default flattenRoutes(routes);
