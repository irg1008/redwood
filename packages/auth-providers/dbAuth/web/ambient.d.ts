/* eslint-disable no-var */

declare global {
  /**
   * FQDN or absolute path to the GraphQL serverless function, without the trailing slash.
   * Example: `./redwood/functions/graphql` or `https://api.redwoodjs.com/graphql`
   */
  var RWJS_API_GRAPHQL_URL: string

  /**
   * URL or absolute path to serverless functions, without the trailing slash.
   * Example: `./redwood/functions/` or `https://api.redwoodjs.com/`
   **/
  var RWJS_API_URL: string

  // Provided by redwood-plugin-vite
  var RWJS_ENV: {
    RWJS_API_GRAPHQL_URL: string
    RWJS_API_URL: string
    __REDWOOD__APP_TITLE: string
    RWJS_EXP_STREAMING_SSR: boolean
  }

  namespace NodeJS {
    interface Global {
      /** URL or absolute path to the GraphQL serverless function */
      RWJS_API_GRAPHQL_URL: string
      /** URL or absolute path to serverless functions */
      RWJS_API_URL: string
    }
  }
}

export {}
