export const logout = () => {
  localStorage.removeItem("dataUser");
  window.location.reload();
  window.location.href = "/"
};

export const logoutUpdate = () => {
  localStorage.removeItem("dataUser");
  window.location.reload();
  window.location.href = "/login"
};

// Esta funcion cierra la sesion si ya pasaron las 70 horas que tiene de vigencia el token que identifica al usuario
export const automaticLogout = () => {
  const datosGuardados = localStorage.getItem("dataUser");

  if (datosGuardados) {
    const {creationDate} = JSON.parse(datosGuardados);
    const currentDate = Date.now();
    const expirationDate = 70 * 60 * 60 * 1000; // 70 horas en milisegundos

    if (currentDate - creationDate > expirationDate) {
      localStorage.removeItem("dataUser");
      window.location.reload();
      window.location.href = "/"
    }
  }
};
