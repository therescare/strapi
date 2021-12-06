"use strict";

/**
 * page router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/pages/:slug',
      handler: 'page.findOneBySlug'
    }
  ]
};
