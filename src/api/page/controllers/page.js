"use strict";

/**
 *  page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOneBySlug(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db
      .query("api::page.page")
      .findOne({ where: { slug }, populate: ['createdBy'] });

    if (!entity) {
      ctx.status = 404;
      return;
    }

    entity.author = entity.createdBy.username;
    delete entity.createdBy;
    delete entity.updatedBy;

    ctx.body = entity;
  },
}));
