export default {
    name: 'featuredRestaurants',
    title: 'Featured Restaurants',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Featured Restaurants Title',
        type: 'string',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'short_description',
        title: 'short description',
        type: 'string',
        validation: (Rule) => Rule.max(200),
      },
      {
        name: 'restaurants',
        title: 'Restaurants',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'restaurant' }] }],
      },
    ],
  };