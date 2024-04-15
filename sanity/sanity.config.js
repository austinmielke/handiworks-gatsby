import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import siteSettings from './schemas/siteSettings'
import pattern from './schemas/pattern'

export default defineConfig({
    name: "default",
    title: "handiworks",
    projectId: "r0zly7kq",
    dataset: "production",
    plugins: [
      structureTool(),
    ],
    schema: {
      types: [siteSettings, pattern]
    },
  })