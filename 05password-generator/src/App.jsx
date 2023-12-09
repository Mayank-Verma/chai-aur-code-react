import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasCharacters, setHasCharacters] = useState(false);
  const passwordref = useRef(null);
  const copiedpasswordref = useRef(null);

  function copyPasswordToClipboard() {
    window.navigator.clipboard.writeText(password);
    passwordref.current?.select();
  }
  function pastePassword() {
    const copiedPassword = window.navigator.clipboard.readText();
    copiedPassword.then((text) => (copiedpasswordref.current.value = text));
  }
  const passwordGenerator = useCallback(
    function () {
      let pass = "";
      let passFrom = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (hasNumbers) passFrom += "0123456789";
      if (hasCharacters) passFrom += "!@#$%^&*()-_=+{}~`";
      for (let i = 1; i <= length; ++i) {
        let randomIndex = Math.floor(Math.random() * passFrom.length + 1);
        pass += passFrom.charAt(randomIndex);
      }
      setPassword(pass);
    },
    [length, hasNumbers, hasCharacters, setPassword]
  );

  useEffect(() => {
    passwordGenerator();
  }, [length, hasNumbers, hasCharacters, passwordGenerator]);

  return (
    <>
      <div className="main-container">
        <p className="title">Password Generator</p>
        <input
          type="text"
          className="input-field-text"
          value={password}
          readOnly
          ref={passwordref}
        ></input>
        <button className="btn" onClick={copyPasswordToClipboard}>
          Copy
        </button>
        <div className="container">
          <div>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            ></input>
            <label> Length ({length})</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={hasNumbers}
              onChange={() => {
                setHasNumbers((prev) => !prev);
              }}
            ></input>
            <label> Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={hasCharacters}
              onChange={() => {
                setHasCharacters((prev) => !prev);
              }}
            ></input>
            <label> Characters</label>
          </div>
        </div>
      </div>
      <div className="main-container">
        <p className="title">Input Field</p>
        <input
          type="text"
          className="input-field-text"
          placeholder="Copied Password"
          ref={copiedpasswordref}
        ></input>
        <button className="btn" onClick={pastePassword}>
          Paste
        </button>
      </div>
    </>
  );
}

export default App;
