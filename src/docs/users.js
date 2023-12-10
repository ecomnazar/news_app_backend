const AllNews = require('../model/newsModel')

const getNews = {
    tags: ['Customer & Admin API'],
    description: 'Get all news',
    operationId: 'getNews',
    summary: 'Get all news',
    security: [
      {
        bearerAuth: [],
      },
    ],
    // requestBody: {
      // content: {
        // 'application/json': {
          // schema: {
          //   $ref: '#/components/schemas/createUserBody',
          // },
        // },
      // },
      // required: true,
    // },
    responses: {
      '201': {
        // description: 'User created successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '60564fcb544047cdc3844818',
                },
                title: {
                  type: 'string',
                  example: 'GPT 5 Release',
                },
                description: {
                  type: 'string',
                  example: 'Release coming soon...',
                },
                image: {
                  type: 'string',
                  example: 'randomimage.png',
                },
                source_title: {
                  type: 'string',
                  example: 'source',
                },
                source_link: {
                  type: 'string',
                  example: 'source.com',
                },
                category_id: {
                  type: 'string',
                  example: 'hgrebrt141er',
                },
                category_name: {
                  type: 'string',
                  example: 'business',
                },
                read_time: {
                  type: 'number',
                  example: 5
                },
                like: {
                  type: 'number',
                  example: 0
                },
                view: {
                  type: 'number',
                  example: 0
                },
                created_at: {
                  type: 'string',
                  example: '2023-11-29T17:59:07.850Z'
                }
              },
            },
          },
        },
      },
      '500': {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Internal Server Error',
                },
              },
            },
          },
        },
      },
    },
};

const getTrendNews = {
  tags: ['Customer & Admin API'],
  description: 'Get trend news',
  operationId: 'getTrendNews',
  summary: 'Get trend news',
  security: [
    {
      bearerAuth: [],
    },
  ],
  // requestBody: {
    // content: {
      // 'application/json': {
        // schema: {
        //   $ref: '#/components/schemas/createUserBody',
        // },
      // },
    // },
    // required: true,
  // },
  responses: {
    '201': {
      // description: 'User created successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '60564fcb544047cdc3844818',
              },
              title: {
                type: 'string',
                example: 'GPT 5 Release',
              },
              description: {
                type: 'string',
                example: 'Release coming soon...',
              },
              image: {
                type: 'string',
                example: 'randomimage.png',
              },
              source_title: {
                type: 'string',
                example: 'source',
              },
              source_link: {
                type: 'string',
                example: 'source.com',
              },
              category_id: {
                type: 'string',
                example: 'hgrebrt141er',
              },
              category_name: {
                type: 'string',
                example: 'business',
              },
              read_time: {
                type: 'number',
                example: 5
              },
              like: {
                type: 'number',
                example: 0
              },
              view: {
                type: 'number',
                example: 0
              },
              created_at: {
                type: 'string',
                example: '2023-11-29T17:59:07.850Z'
              }
            },
          },
        },
      },
    },
    '500': {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Internal Server Error',
              },
            },
          },
        },
      },
    },
  },
};

const getCategories = {
  tags: ['Customer & Admin API'],
  description: 'Get all categories',
  operationId: 'getCategories',
  summary: 'Get categories',
  responses: {
    '201': {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '60564fcb544047cdc3844818',
              },
              name: {
                type: 'string',
                example: 'Business',
              },
              created_at: {
                type: 'string',
                example: '2023-11-29T17:59:07.850Z'
              }
            },
          },
        },
      },
    },
  },
}

const createNew = {
    tags: ["Customer & Admin API"], // operation's tag
      description: "Create new", // short desc
      operationId: "createTodo", // unique operation id
      summary: 'Create new',
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: AllNews, // todo input data model
            },
          },
        },
      },
      parameters: [
        {
            in: "body",
            name: "",
            description: "Request body as following",
            required: true,
            schema: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                        example: "ePortal release coming"
                    },
                    description: {
                      type: "string",
                      example: "This is a description of the news"
                    },
                    image: {
                      type: "string",
                      example: "image_1701253999360_Screenshot 2023-11-27 at 14.45.33.png"
                    },
                    source_link: {
                      type: "string",
                      example: "https://www.google.com"
                    },
                    source_title: {
                      type: "string",
                      example: "Google"
                    },
                    category_id: {
                      type: "string",
                      example: "asd1132dfs"
                    },
                    category_name: {
                      type: "string",
                      example: "business"
                    }
                }
            }
        }
    ],
};

const createCategory = {
  tags: ["Customer & Admin API"], // operation's tag
    description: "Create category", // short desc
    operationId: "createCategory", // unique operation id
    summary: 'Create category',
    parameters: [
      {
          in: "body",
          name: "",
          description: "Request body as following",
          required: true,
          schema: {
              type: "object",
              properties: {
                  name: {
                      type: "string",
                      example: "Software"
                  }
              }
          }
      }
  ],
};

const deleteNew = {
  tags: ["Customer & Admin API"], // operation's tag
  description: "Delete new", // short desc
  operationId: "deleteNew", // unique operation id
  summary: 'Delete specific new',
  parameters: [
    {
      in: "body",
      name: "",
      description: "Request body as following",
      required: true,
      schema: {
        type: "object",
        properties: {
            id: {
                type: "string",
                example: "fgsf141231s"
            }
        }
    }
    }
  ]
}

const deleteUser = {
    tags: ['Users'],
    description: 'Delete a user',
    operationId: 'deleteUser',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'User ID',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      '200': {
        description: 'User deleted successfully!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'User deleted successfully!',
                },
              },
            },
          },
        },
      },
      '500': {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Internal Server Error',
                },
              },
            },
          },
        },
      },
    },
};

const deleteCategory = {
  tags: ["Customer & Admin API"], // operation's tag
  description: "Delete category", // short desc
  operationId: "deleteCategory", // unique operation id
  summary: 'Delete specific category',
  parameters: [
    {
      in: "body",
      name: "",
      description: "Request body as following",
      required: true,
      schema: {
        type: "object",
        properties: {
            id: {
                type: "string",
                example: "fgsf141231s"
            }
        }
    }
    }
  ]
}

module.exports = {getNews, createNew, deleteUser, getCategories, createCategory, deleteNew, deleteCategory, getTrendNews };