export const Requisitos = () => {
  return (
    <>
      <h2>Requisitos de creación de cuenta</h2>
      <h4 id="un-nickname-válido-debe-cumplir-con-los-siguientes-requisitos">
        Un nickname válido debe cumplir con los siguientes requisitos:
      </h4>
      <ol>
        <li>
          <p>Longitud mínima: El nickname debe tener al menos 4 caracteres.</p>
        </li>
        <li>
          <p>
            Caracteres permitidos: El nickname puede contener letras (mayúsculas
            y minúsculas), números y guiones bajos.
          </p>
        </li>
        <li>
          <p>
            Restricciones de caracteres: No se permiten caracteres especiales
            distintos de los guiones bajos. Otros caracteres especiales no están
            permitidos en el nickname.
          </p>
        </li>
      </ol>
      <h4 id="un-email-válido-debe-cumplir-con-los-siguientes-requisitos">
        Un email válido debe cumplir con los siguientes requisitos:
      </h4>
      <ol>
        <li>
          <p>
            Formato de dirección de correo electrónico: El email debe seguir un
            formato estándar de dirección de correo electrónico, que incluye una
            parte local antes del símbolo de arroba (@) y un dominio después del
            símbolo de arroba.
          </p>
        </li>
        <li>
          <p>
            Caracteres permitidos: El email puede contener letras (mayúsculas y
            minúsculas), números, puntos, guiones, porcentajes y signos
            más/menos en la parte local y en el dominio.
          </p>
        </li>
        <li>
          <p>
            Dominio válido: El dominio del email debe tener al menos dos
            caracteres después del último punto. Por ejemplo, .com, .net, .org,
            etc.
          </p>
        </li>
        <li>
          <p>
            Restricciones de caracteres: No se permiten caracteres especiales
            adicionales fuera de los mencionados anteriormente.
          </p>
        </li>
      </ol>
      <h4 id="una-contraseña-válida-debe-cumplir-con-los-siguientes-requisitos">
        Una contraseña válida debe cumplir con los siguientes requisitos:
      </h4>
      <ol>
        <li>
          <p>
            Longitud mínima: La contraseña debe tener al menos 8 caracteres.
          </p>
        </li>
        <li>
          <p>
            Caracteres permitidos: La contraseña puede contener letras
            (mayúsculas y minúsculas), números, guiones (<code>-</code>),
            guiones bajos (<code>_</code>) y caracteres especiales como
            @$!%*?&amp;.
          </p>
        </li>
        <li>
          <p>
            Restricciones de caracteres: La contraseña debe cumplir con los
            siguientes requisitos:
          </p>
          <ul>
            <li>Contener al menos una letra mayúscula.</li>
            <li>Contener al menos una letra minúscula.</li>
            <li>Contener al menos un dígito.</li>
            <li>Opcionalmente, puede contener guiones y guiones bajos.</li>
            <li>
              Opcionalmente, puede contener caracteres especiales (como
              @$!%*?&amp;).
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export const RequisitosArticle = () => {
  return (
    <>
      <h3 id="requisitos-para-publicar-un-artículo">
        Requisitos para publicar un artículo
      </h3>
      <p>
        Para poder publicar un artículo, debes cumplir con los siguientes
        requisitos:
      </p>
      <ol>
        <li>
          <p>
            <strong>Título del artículo</strong>:
          </p>
          <ul>
            <li>
              Longitud mínima: El título debe tener al menos 5 caracteres.
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>URL del artículo</strong>:
          </p>
          <ul>
            <li>
              Verificación de URL: La URL debe cumplir con el siguiente formato:
              <ul>
                <li>Debe ser una URL válida de Google Docs.</li>
                <li>
                  Debe seguir este formato:{" "}
                  <code>
                    https://docs.google.com/document/d/{"ID_DEL_DOCUMENTO"}
                    /edit?usp=sharing
                  </code>
                </li>
                <li>
                  O tambien este formato:{" "}
                  <code>
                    https://docs.google.com/document/d/{"ID_DEL_DOCUMENTO"}/edit
                  </code>
                </li>
                <li>
                  Donde <code>{"ID_DEL_DOCUMENTO"}</code> es una cadena
                  alfanumérica.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Asegúrate de cumplir con estos requisitos antes de publicar tu artículo.
        Si el título tiene menos de 5 caracteres o la URL no cumple con el
        formato mencionado, no podrás realizar la publicación.
      </p>
      <p>Aquí tienes un ejemplo de dos URL válidas: </p>
      <ul>
        <li>
          <a
            href="https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit?usp=sharing
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit
          </a>
        </li>
      </ul>
    </>
  );
};
