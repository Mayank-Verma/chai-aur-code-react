import { useEffect, useRef, useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [fromAmount, SetFromAmount] = useState();
  const [toAmount, SetToAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("usd");
  const resultRef = useRef();
  const currency = "inr";
  const exchangeRateData = useCurrencyInfo(currency);

  useEffect(() => {
    SetToAmount((exchangeRateData[toCurrency] * fromAmount).toFixed(4));
    console.log(exchangeRateData[toCurrency] * fromAmount);
  }, [fromAmount, toAmount, fromCurrency, toCurrency, exchangeRateData]);

  function handleSwap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    SetFromAmount(toAmount);
    SetToAmount(fromAmount);
  }
  function handleResult() {
    if (isFinite(toAmount)) {
      if (resultRef.current.innerText === toAmount)
        resultRef.current.innerText = `Convert ${fromCurrency.toUpperCase()} to ${toCurrency.toUpperCase()}`;
      else resultRef.current.innerText = toAmount;
    }
  }
  return (
    <div className="main-container">
      <div className="input-box-internal-container">
        <InputBox
          title="From"
          amount={fromAmount}
          currency={fromCurrency}
          onAmountChange={SetFromAmount}
          onCurrencyChange={setFromCurrency}
          currencyList={Object.keys(exchangeRateData)}
        />
        <button className="swap-btn" onClick={handleSwap}>
          swap
        </button>
        <InputBox
          title="To"
          amount={toAmount}
          currency={toCurrency}
          onAmountChange={SetToAmount}
          onCurrencyChange={setToCurrency}
          currencyList={Object.keys(exchangeRateData)}
        />
        <button className="convert-btn" onClick={handleResult} ref={resultRef}>
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
