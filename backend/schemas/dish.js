export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      title: 'Price of the dish in INR',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
    },
    //  {
    //   name: 'restaurant',
    //   title: 'Restaurant of the dish',
    //   type: 'reference',
    //   to: [{ type: 'restaurant' }],
    //   validation: (Rule) => Rule.required(),
    // }, 
    //  {
    //   name: 'menuCategory',
    //   title: 'Category of the dish',
    //   type: 'reference',
    //   to: [{ type: 'menuCategory' }],
    //   validation: (Rule) => Rule.required(),
    // },
  ],
};