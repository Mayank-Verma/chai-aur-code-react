import { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
  const [exchangeRateData, setExchangeRateData] = useState({});
  useEffect(
    function () {
      fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
        .then((response) => response.json())
        .then((data) => {
          setExchangeRateData(data[currency]);
        });
    },
    [currency]
  );
  return exchangeRateData;
}
