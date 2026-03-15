import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'coalitionMember',
  title: 'Coalition Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({ name: 'descriptionEs', title: 'Description (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'website', title: 'Website', type: 'url', validation: (r) => r.required() }),
    defineField({ name: 'contactEmail', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'serviceArea', title: 'Service Area', type: 'string' }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
});
