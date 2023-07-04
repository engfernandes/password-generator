function generatePassword() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  password += Math.floor(Math.random() * 10);
  password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  password += characters[Math.floor(Math.random() * characters.length)];

  while (password.length < 18) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}

export default generatePassword;
