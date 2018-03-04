export default {
  swagger: '2.0',
  info: {
    description:
      'This is a sample Petstore server.  You can find \nout more about Swagger at \n[http://swagger.io](http://swagger.io) or on \n[irc.freenode.net, #swagger](http://swagger.io/irc/).\n',
    version: '1.0.0',
    title: 'Swagger Petstore',
    termsOfService: 'http://swagger.io/terms/',
    contact: {
      email: 'apiteam@swagger.io',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  host: 'virtserver.swaggerhub.com',
  basePath: '/chungchi300/Petstore-redux-api-middleware-addon/1.0.0',
  tags: [
    {
      name: 'pet',
      description: 'Everything about your Pets',
      externalDocs: {
        description: 'Find out more',
        url: 'http://swagger.io',
      },
    },
    {
      name: 'store',
      description: 'Access to Petstore orders',
    },
    {
      name: 'user',
      description: 'Operations about user',
      externalDocs: {
        description: 'Find out more about our store',
        url: 'http://swagger.io',
      },
    },
  ],
  schemes: ['https', 'http'],
  paths: {
    '/pet': {
      post: {
        tags: ['pet'],
        summary: 'Add a new pet to the store',
        operationId: 'addPet',
        consumes: ['application/json', 'application/xml'],
        produces: ['application/json', 'application/xml'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Pet object that needs to be added to the store',
            required: true,
            schema: {
              $ref: '#/definitions/Pet',
            },
          },
        ],
        responses: {
          '405': {
            description: 'Invalid input',
          },
        },
        security: [
          {
            petstore_auth: ['write:pets', 'read:pets'],
          },
        ],
      },
      put: {
        tags: ['pet'],
        summary: 'Update an existing pet',
        operationId: 'updatePet',
        consumes: ['application/json', 'application/xml'],
        produces: ['application/json', 'application/xml'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Pet object that needs to be added to the store',
            required: true,
            schema: {
              $ref: '#/definitions/Pet',
            },
          },
        ],
        responses: {
          '400': {
            description: 'Invalid ID supplied',
          },
          '404': {
            description: 'Pet not found',
          },
          '405': {
            description: 'Validation exception',
          },
        },
        security: [
          {
            petstore_auth: ['write:pets', 'read:pets'],
          },
        ],
      },
    },
    '/pet/findByStatus': {
      get: {
        tags: ['pet'],
        summary: 'Finds Pets by status',
        description:
          'Multiple status values can be provided with comma separated strings',
        operationId: 'findPetsByStatus',
        produces: ['application/json', 'application/xml'],
        parameters: [
          {
            name: 'status',
            in: 'query',
            description: 'Status values that need to be considered for filter',
            required: true,
            type: 'array',
            items: {
              type: 'string',
              enum: ['available', 'pending', 'sold'],
              default: 'available',
            },
            collectionFormat: 'multi',
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Pet',
              },
            },
          },
          '400': {
            description: 'Invalid status value',
          },
        },
        security: [
          {
            petstore_auth: ['write:pets', 'read:pets'],
          },
        ],
      },
    },
    '/pet/{petId}': {
      get: {
        tags: ['pet'],
        summary: 'Find pet by ID',
        description: 'Returns a single pet',
        operationId: 'getPetById',
        produces: ['application/json', 'application/xml'],
        parameters: [
          {
            name: 'petId',
            in: 'path',
            description: 'ID of pet to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/Pet',
            },
          },
          '400': {
            description: 'Invalid ID supplied',
          },
          '404': {
            description: 'Pet not found',
          },
        },
        security: [
          {
            api_key: [],
          },
        ],
      },
      post: {
        tags: ['pet'],
        summary: 'Updates a pet in the store with form data',
        operationId: 'updatePetWithForm',
        consumes: ['application/x-www-form-urlencoded'],
        produces: ['application/json', 'application/xml'],
        parameters: [
          {
            name: 'petId',
            in: 'path',
            description: 'ID of pet that needs to be updated',
            required: true,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'name',
            in: 'formData',
            description: 'Updated name of the pet',
            required: false,
            type: 'string',
          },
          {
            name: 'status',
            in: 'formData',
            description: 'Updated status of the pet',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          '405': {
            description: 'Invalid input',
          },
        },
        security: [
          {
            petstore_auth: ['write:pets', 'read:pets'],
          },
        ],
      },
      delete: {
        tags: ['pet'],
        summary: 'Deletes a pet',
        operationId: 'deletePet',
        produces: ['application/json', 'application/xml'],
        parameters: [
          {
            name: 'api_key',
            in: 'header',
            required: false,
            type: 'string',
          },
          {
            name: 'petId',
            in: 'path',
            description: 'Pet id to delete',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          '400': {
            description: 'Invalid ID supplied',
          },
          '404': {
            description: 'Pet not found',
          },
        },
        security: [
          {
            petstore_auth: ['write:pets', 'read:pets'],
          },
        ],
      },
    },
  },
  securityDefinitions: {
    petstore_auth: {
      type: 'oauth2',
      authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
      flow: 'implicit',
      scopes: {
        'write:pets': 'modify pets in your account',
        'read:pets': 'read your pets',
      },
    },
    api_key: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header',
    },
  },
  definitions: {
    Pet: {
      type: 'object',
      required: ['name', 'photoUrls'],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        category: {
          $ref: '#/definitions/Category',
        },
        name: {
          type: 'string',
          example: 'doggie',
        },
        photoUrls: {
          type: 'array',
          xml: {
            name: 'photoUrl',
            wrapped: true,
          },
          items: {
            type: 'string',
          },
        },
        tags: {
          type: 'array',
          xml: {
            name: 'tag',
            wrapped: true,
          },
          items: {
            $ref: '#/definitions/Tag',
          },
        },
        status: {
          type: 'string',
          description: 'pet status in the store',
          enum: ['available', 'pending', 'sold'],
        },
      },
      example: {
        photoUrls: ['photoUrls', 'photoUrls'],
        name: 'doggie',
        id: 0,
        category: {
          name: 'name',
          id: 6,
        },
        tags: [
          {
            name: 'name',
            id: 1,
          },
          {
            name: 'name',
            id: 1,
          },
        ],
        status: 'available',
      },
      xml: {
        name: 'Pet',
      },
    },
    ApiResponse: {
      type: 'object',
      properties: {
        code: {
          type: 'integer',
          format: 'int32',
        },
        type: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
      },
      example: {
        code: 0,
        type: 'type',
        message: 'message',
      },
    },
  },
  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'http://swagger.io',
  },
};
