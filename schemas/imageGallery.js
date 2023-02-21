import {defineField, defineType} from 'sanity'

// scheme을 object를 상속하여 만들 수 있다.
export default defineType({
    name: 'imageGallery',
    title: 'image Gallery',
    type: 'object',
    fields: [
        defineField({
            name: "caption",
            title: "Caption",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            options: {
                layout: 'grid'
            },
            of: [{
                name: 'image',
                title: 'Image',
                type: 'image',
                hotspot: true,
                fields: [
                    defineField({
                        name: 'alt',
                        title: 'alt',
                        type: 'string'
                    })
                ],
                validation: (Rule) => Rule.required(),  
            }],
            validation: (Rule) => Rule.required().max(4),
        }),
    ],
    validation: (Rule) => Rule.required(), 
})