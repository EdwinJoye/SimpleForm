import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [formulaire, setformulaire] = useState(false);

  return (
    <div className="body">
      {/* HEADER */}
      <header className="header">
        <h1 className="title">Creat Account</h1>
      </header>
      {/* BODY */}
      <Form
        setUsername={setUsername}
        usernameValue={username}
        setEmail={setEmail}
        emailValue={email}
        setPassword={setPassword}
        passwordValue={password}
        setConfirmpassword={setConfirmpassword}
        confirmpasswordValue={confirmpassword}
        setformulaire={setformulaire}
      ></Form>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          {" "}
          Made with <span className="span"> React</span> at{" "}
          <span>Le Reacteur</span> by <span> Edwin </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
