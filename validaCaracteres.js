function validaCaracteres(username, password) {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const userRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (userRegex.test(username) && passRegex.test(password)) {
        return true;
      } else {
        return false;
      }

  }
module.exports = validaCaracteres