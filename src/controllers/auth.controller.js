export const register = (req, res) => {
  console.log(req.body);
  res.send('Registrando...');
}

export const login = (req, res) => {
  res.send('login')
}