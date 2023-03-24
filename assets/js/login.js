

const loginForm = document.getElementById('login-form');
const errorMensaje = document.getElementById('error-mensaje');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  
  if (username === 'ska.milla@hotmail.com' && password === 'alucard12') {
    alert('¡Inicio de sesión exitoso!');
  } else {
    alert('Nombre de usuario o contraseña incorrectos.');
  }
});
