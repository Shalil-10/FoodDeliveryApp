export default {
    name: 'appMenuCategory',
    title: 'App Menu Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Category name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image of Category',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'restaurantMenuCategory',
            title: 'Restaurant Menu Category',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'restaurantMenuCategory' }] }],
        },

    ],
};