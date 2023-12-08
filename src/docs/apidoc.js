const {getNews, createNew, getCategories, createCategory, deleteNew, deleteCategory } = require('./users')

const apiDocumentation = {
    openapi: '3.0.1',
    info: {
      title: 'ePortal Backend Documentation',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:4003',
        // url: 'http://45.146.167.233:4003',
        description: 'Remote Server'
      }
    ],
    tags: [
      {
        name: 'Customer & Admin API',
      }
    ],
    paths: {
      '/api/v1/news': {
        get: getNews,
        post: createNew,
        delete: deleteNew
      },
      '/api/v1/categories': {
        get: getCategories,
        post: createCategory,
        delete: deleteCategory
      }
    }
  };
  
  module.exports = apiDocumentation