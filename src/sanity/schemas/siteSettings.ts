import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Site Title', type: 'string', initialValue: 'NJ Grief Collaborative' }),
    defineField({ name: 'contactEmail', title: 'General Contact Email', type: 'string' }),
    defineField({ name: 'sponsorName', title: 'Sponsor Name', type: 'string', initialValue: 'New York Life Foundation' }),
    defineField({ name: 'sponsorLogo', title: 'Sponsor Logo', type: 'image' }),
    defineField({ name: 'sponsorUrl', title: 'Sponsor URL', type: 'url' }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({ name: 'facebook', title: 'Facebook', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
        defineField({ name: 'linkedin', title: 'LinkedIn', type: 'url' }),
        defineField({ name: 'twitter', title: 'Twitter/X', type: 'url' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
