import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'titleEs', title: 'Title (Spanish)', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'date', title: 'Start Date & Time', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'endDate', title: 'End Date & Time', type: 'datetime' }),
    defineField({ name: 'location', title: 'Location', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'virtual', title: 'Virtual Event?', type: 'boolean', initialValue: false }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'descriptionEs', title: 'Description (Spanish)', type: 'text', rows: 4 }),
    defineField({ name: 'cost', title: 'Cost', type: 'string', initialValue: 'Free' }),
    defineField({ name: 'registrationUrl', title: 'Registration URL', type: 'url' }),
    defineField({
      name: 'hostCenter',
      title: 'Host Center',
      type: 'reference',
      to: [{ type: 'coalitionMember' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Training', value: 'training' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Webinar', value: 'webinar' },
          { title: 'Seminar', value: 'seminar' },
          { title: 'Conference', value: 'conference' },
          { title: 'Community Event', value: 'community' },
        ],
      },
    }),
    defineField({ name: 'image', title: 'Event Image', type: 'image', options: { hotspot: true } }),
  ],
  orderings: [
    { title: 'Event Date', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', date: 'date', virtual: 'virtual' },
    prepare({ title, date, virtual }) {
      return {
        title,
        subtitle: `${new Date(date).toLocaleDateString()} ${virtual ? '(Virtual)' : ''}`,
      };
    },
  },
});
