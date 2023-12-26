const validation = (userData) => {
  let errors = {};
  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(userData.email)) {
    errors.email = "El email es inválido";
  }
  if (userData.email === "") {
    errors.email = "Por favor, ingrese su email";
  }
  if (userData.email.length >= 35) {
    errors.email = "El email no puede tener más de 35 caracteres";
  }
  if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(userData.password)) {
    errors.password =
      "La contraseña tiene que tener al menos un número, una minúscula y una mayúscula";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña tiene una longitud incorrecta";
  }
  return errors;
};

export default validation;
