import { fetchBusinessData } from './helpers/business.js';

/**
 * A GDS styled example home page controller.
 * Provided as an example, remove or modify as required.
 * @satisfies {Partial<ServerRoute>}
 */
export const businessController = {
  async handler(_request, h) {
    const sbi = 117235001;
    const crn = 1100598138;
    const businessData = await fetchBusinessData(sbi, crn);

    return h.view('business/index', {
      pageTitle: 'Business',
      heading: 'Business',
      businessData
    });
  }
}

/**
 * @import { ServerRoute } from '@hapi/hapi'
 */
