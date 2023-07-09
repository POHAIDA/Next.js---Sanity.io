import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: 'bknawbls',
    dataset: 'production',
    title: 'My Project',
    apiVersion: '2023-07-05',
    basePath: "/admin",
    plugins: [deskTool()],
    schema:{ types: schemas  },
})

export default config;