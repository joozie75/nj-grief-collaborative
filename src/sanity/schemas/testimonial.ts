import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({ name: 'quoteEs', title: 'Quote (Spanish)', type: 'text', rows: 4 }),
    defineField({ name: 'attribution', title: 'Attribution (Role Only)', type: 'string', description: 'e.g. "High School Teacher" — keep anonymous', validation: (r) => r.required() }),
    defineField({ name: 'attributionEs', title: 'Attribution (Spanish)', type: 'string' }),
    defineField({
      name: 'perspective',
      title: 'Perspective Type',
      type: 'string',
      options: {
        list: [
          { title: 'Educator', value: 'educator' },
          { title: 'Parent', value: 'parent' },
          { title: 'Student', value: 'student' },
          { title: 'Counselor', value: 'counselor' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'sourceCenter',
      title: 'Source Center',
      type: 'reference',
      to: [{ type: 'coalitionMember' }],
    }),
  ],
  preview: {
    select: { quote: 'quote', attribution: 'attribution', perspective: 'perspective' },
    prepare({ quote, attribution, perspective }) {
      return {
        title: quote?.substring(0, 60) + '...',
        subtitle: `${attribution} (${perspective})`,
      };
    },
  },
});
