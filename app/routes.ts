import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("team", "./routes/team.tsx"),
  route("mondesa", "./routes/mondesa.tsx"),
  route("projects", "./routes/projects.tsx"),
  route("projects/:projectId", "./routes/project-detail.tsx"),
  route("contact", "./routes/contact.tsx"),
  route("*", "./routes/not-found.tsx"),
] satisfies RouteConfig;
