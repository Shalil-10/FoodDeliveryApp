export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Resturant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lng',
      title: 'Longitude of the Restaurant',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Enter a Rating from (1-5 Stars)',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error('Please enter a Value between 1 and 5'),
    },
    // {
    //   name: 'menuCategory',
    //   title: 'Menu Category',
    //   type: 'reference',
    //   to: [{ type: 'menuCategory' }],
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: 'restaurantMenuCategory',
      title: 'Restaurant Menu Category',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'restaurantMenuCategory' }] }],
    },
    // {
    //   name: 'dishes',
    //   title: 'Dishes',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'dish' }] }],
    // },
  ],

  
}
