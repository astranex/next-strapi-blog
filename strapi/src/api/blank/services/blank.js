'use strict';

/**
 * blank service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blank.blank');
