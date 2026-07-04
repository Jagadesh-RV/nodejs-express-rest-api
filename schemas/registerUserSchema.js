const { z } = require('zod');

const registerUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
    username: z.string().min(3)
  })
});

module.exports = registerUserSchema;