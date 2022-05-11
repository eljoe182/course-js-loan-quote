import { useState, Fragment } from "react";
import FormComponent from "./components/FormComponent";
import HeaderComponent from "./components/HeaderComponent";
import ResultComponent from "./components/ResultComponent";
import SpinnerComponent from "./components/SpinnerComponent";

function App() {
  const [amount, setAmount] = useState(0);
  const [quote, setQuote] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <Fragment>
      <HeaderComponent text={"Corizador de Prestamos"} />
      <div className="container">
        <FormComponent
          amount={amount}
          quote={quote}
          total={total}
          setAmount={setAmount}
          setQuote={setQuote}
          setTotal={setTotal}
          setLoading={setLoading}
        />

        {loading ? (
          <SpinnerComponent />
        ) : (
          <div className="mensajes">
            {total === 0 ? (
              <p>Agrega una cantidad, un plazo y pulsa calcular para cotizar</p>
            ) : (
              <ResultComponent amount={amount} quote={quote} total={total} />
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default App;
