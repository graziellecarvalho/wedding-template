import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "03qmume0",
  dataset: 'production',
  title: 'Wedding Services Template',
  apiVersion: '2022-03-07',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: { types: schemas}
})

export default config
