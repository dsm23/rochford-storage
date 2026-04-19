import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

const routes = [
  layout("./layout.tsx", [
    index("./routes/home/index.tsx"),
    route("placeholder", "./routes/placeholder/index.tsx"),
  ]),
] satisfies RouteConfig;

export default routes;
