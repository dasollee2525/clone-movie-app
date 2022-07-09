import { useEffect, useState } from "react";
import styles from "./App.module.css"

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [budget, setMyBudget] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  },[])

  function onChange(event) {
    setMyBudget(event.target.value)
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(The Number of Coins: ${coins.length})`}</h1>
      <h4>Put your budget (USD)</h4>
      <input 
        onChange={onChange}
        value={budget}
        type="number"
        placeholder="Write your budget on USD"
      />
      
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : {Math.round(budget / coin.quotes.USD.price*1000)/1000} 개
            </option>))}
        </select>
      )}
    </div>
  );
}

export default App;
