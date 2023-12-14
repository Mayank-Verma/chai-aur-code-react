export default function InputBox({
  title,
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  currencyList,
}) {
  return (
    <div className="input-box-container">
      <div className="internal-div">
        <label>{title}</label>
        <label style={{ color: "white" }}>Currency</label>
      </div>
      <div className="internal-div">
        <input
          type="number"
          style={{ color: "white", background: "green" }}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        ></input>
        <select
          style={{
            width: "90px",
            height: "25px",
            textAlign: "center",
            fontSize: "15px",
            color: "white",
            background: "green",
          }}
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyList.map((currency) => (
            <option value={currency} key={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
