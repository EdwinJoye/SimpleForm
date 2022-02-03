const StepTwo = ({ usernameValue, emailValue, passwordValue }) => {
  return (
    <div>
      <header>
        <p>Results</p>
      </header>
      <div>
        <div> Name : {usernameValue}</div>
        <p>Email : {emailValue}</p>
        <p>Password : {passwordValue}</p>
      </div>
      <button className="register">Edit your information</button>
      <footer>
        <p>
          {" "}
          Made with <span className="span"> React</span> at{" "}
          <span>Le Reacteur</span> by <span> Edwin </span>
        </p>
      </footer>
    </div>
  );
};
export default StepTwo;
