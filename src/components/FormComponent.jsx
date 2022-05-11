import React, { Fragment, useState } from "react";
import { calculateTotal } from "../helpers";

const FormComponent = (props) => {
  const { amount, quote, setAmount, setQuote, setTotal, setLoading } = props;
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values({ amount, quote }).some((value) => value === 0)) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setTotal(calculateTotal(amount, quote));
      setLoading(false);
    }, 2000);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              min={0}
              onChange={(e) => {
                const result = parseInt(e.target.value);
                setTotal(0);
                setAmount(Number.isNaN(result) ? 0 : result);
              }}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(e) => {
                setTotal(0);
                setQuote(parseInt(e.target.value));
              }}
            >
              <option value="0">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error && <p className="error">Seleccione un plazo y una cantidad</p>}
    </Fragment>
  );
};

export default FormComponent;
