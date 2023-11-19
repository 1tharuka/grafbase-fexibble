import { g, config } from "@grafbase/sdk";
const User = g.model("user", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  discription: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g
    .relation(() => projects)
    .list()
    .optional(),
});
const projects = g.model("project", {
  title: g.string().length({ min: 3 }),
  discription: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
});
export default config({
  schema: g,
});
