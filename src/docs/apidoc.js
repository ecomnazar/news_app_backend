const {getNews, createNew, deleteUser } = require('./users')

const apiDocumentation = {
    openapi: '3.0.1',
    info: {
      title: 'ePortal Backend Documentation',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://45.146.167.233:4003',
        description: 'Remote Server'
      }
    ],
    tags: [
      {
        name: 'Customers Mobile App',
      },
      {
        name: 'Admin Web',
      }
    ],
    paths: {
      '/news': {
        get: getNews,
        post: createNew,
      },
    }
  };
  
  module.exports = apiDocumentation