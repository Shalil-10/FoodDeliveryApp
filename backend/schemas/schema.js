// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import dish from './dish'
import restaurant from './restaurant'
import restaurantMenuCategory from './restaurantMenuCategory'
import appMenuCategory from './appMenuCategory'
import featuredRestaurants from './featuredRestaurants'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',

  types: schemaTypes.concat([
    restaurant,
    restaurantMenuCategory,
    dish,
    appMenuCategory,
    featuredRestaurants,
  ]),
})
