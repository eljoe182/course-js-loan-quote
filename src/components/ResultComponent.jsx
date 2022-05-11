import React from "react";

const ResultComponent = ({ amount, quote, total }) => {
  return (
    <div className="u-full-width resultado">
      <h2>Resumen</h2>
      <p>
        La cantidad solicitada es de: <strong>$ {amount}</strong>
      </p>
      <p>
        A pagar en: <strong>{quote} meses</strong>
      </p>
      <p>
        Su pago mensual es de: <strong>$ {(total / quote).toFixed(2)}</strong>
      </p>
      <p>
        El total a pagar es de: <strong>{total.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default ResultComponent;
