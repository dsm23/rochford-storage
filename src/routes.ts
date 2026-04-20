import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

const routes = [
  layout("./layout.tsx", [
    index("./routes/home/index.tsx"),
    route("accessibility", "./routes/accessibility/index.tsx"),
    route("contact", "./routes/contact/index.tsx"),
    route("cookie-settings", "./routes/cookies/index.tsx"),
    route("gallery", "./routes/gallery/index.tsx"),
    route("privacy-policy", "./routes/privacy/index.tsx"),
    route("rates", "./routes/rates/index.tsx"),
  ]),
] satisfies RouteConfig;

export default routes;
