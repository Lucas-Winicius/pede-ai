export default {
  description: 'create new user',
  tags: ['users'],
  summary: 'user',
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
    },
  },
  response: {
    201: {
      description: 'Usuario criado com sucesso',
      type: 'object',
      properties: {
        status: { type: 'number' },
        message: { type: 'string' },
        data: { type: 'object' },
      },
    },
    400: {
      description: 'Erro ao criar',
      type: 'object',
      properties: {
        status: { type: 'number' },
        message: { type: 'string' },
        data: { type: 'object' },
      },
    },
  },
} as const
