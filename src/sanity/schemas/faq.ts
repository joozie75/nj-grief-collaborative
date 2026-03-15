import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'questionEs', title: 'Question (Spanish)', type: 'string' }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'answerEs', title: 'Answer (Spanish)', type: 'text', rows: 4 }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Mandate', value: 'mandate' },
          { title: 'Schools', value: 'schools' },
          { title: 'Resources', value: 'resources' },
          { title: 'General', value: 'general' },
        ],
      },
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'question', subtitle: 'category' },
  },
});
