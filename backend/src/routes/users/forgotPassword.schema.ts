export default {
  description: 'Esqueci a senha',
  tags: ['users'],
  summary: 'user',
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
    },
  },
  response: {
    200: {
      description: 'Token de troca de senha enviado',
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
