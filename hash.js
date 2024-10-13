const bcrypt = require('bcryptjs');

const password = 'your-admin-password';  // Replace this with the actual password you want to hash

bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log('Hashed password:', hash);
});
