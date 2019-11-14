'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    snipcartParser: async (ctx) => {
        let products = await strapi.services.product.fetchAll(ctx.query);
        return products.map(product => {
            return {
            id: product._id,
            price: product.price,
            url: "https://snipcart-strapi.herokuapp.com/snipcartParser"
            }
        })
    }
};
