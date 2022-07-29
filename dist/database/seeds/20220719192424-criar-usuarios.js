"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Anderson',
        email: 'anderson@amigoapp.com',
        password_hash: await bcryptjs.hash('qwerty', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Anderson2',
        email: 'anderson2@amigoapp.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Anderson3',
        email: 'anderson3@amigoapp.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
