import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'titleEs', title: 'Title (Spanish)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({ name: 'descriptionEs', title: 'Description (Spanish)', type: 'text', rows: 3 }),
    defineField({
      name: 'audiences',
      title: 'Target Audiences',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'School Professionals', value: 'schoolProfessionals' },
          { title: 'Parents', value: 'parents' },
          { title: 'Students', value: 'students' },
        ],
      },
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          { title: 'Guide', value: 'guide' },
          { title: 'Video', value: 'video' },
          { title: 'Worksheet', value: 'worksheet' },
          { title: 'Presentation', value: 'presentation' },
          { title: 'Article', value: 'article' },
          { title: 'Toolkit', value: 'toolkit' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'file', title: 'Downloadable File', type: 'file' }),
    defineField({ name: 'externalUrl', title: 'External URL', type: 'url' }),
    defineField({
      name: 'sourceCenter',
      title: 'Source Center',
      type: 'reference',
      to: [{ type: 'coalitionMember' }],
    }),
    defineField({ name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'title', format: 'format' },
    prepare({ title, format }) {
      return { title, subtitle: format };
    },
  },
});
