import {defineField, defineType} from 'sanity'

export const artistType = 
defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'age',
        type: 'number',
      }),
    defineField({
        name: 'photo',
        type: 'image',
      }),
  ],
})