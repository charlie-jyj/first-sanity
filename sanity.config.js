import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input' 
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'my-blog-contents',

  projectId: 'rgxgqmz3',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    colorInput(),
    codeInput(),
    ],

  schema: {
    types: schemaTypes,
    // types: [{
    //   type: 'document',
    //   name: 'color-demo',
    //   title: 'Document with color field',
    //   fields: [
    //     {
    //       type: 'color',
    //       name: 'mySwatch',
    //       title: 'Swatch',
    //     },
    //   ]
    // }]
  },
})
