import { businessController } from '~/src/server/business/controller.js'

/**
 * Sets up the routes used in the business page.
 * These routes are registered in src/server/router.js.
 */

/**
 * @satisfies {ServerRegisterPluginObject<void>}
 */
export const business = {
  plugin: {
    name: 'business',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/business',
          ...businessController
        }
      ])
    }
  }
}

/**
 * @import { ServerRegisterPluginObject } from '@hapi/hapi'
 */
