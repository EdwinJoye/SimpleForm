import StepTwo from "./StepTwo";

const Form = ({
  usernameValue,
  setUsername,
  emailValue,
  setEmail,
  passwordValue,
  setPassword,
  confirmpasswordValue,
  setConfirmpassword,
  setformulaire,
}) => {
  const handleSubmit = (event) => {
    confirmpasswordValue &&
    passwordValue &&
    confirmpasswordValue === passwordValue
      ? (setformulaire = true)
      : alert("Vos deux mots de passe ne sont pas identiques");
    console.log(setformulaire);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="colonnes">
        <p>Name</p>
        <input
          value={usernameValue}
          type="text"
          onChange={(event) => {
            // console.log(event.target.value);
            setUsername(event.target.value);
          }}
        />
        <p>Email</p>
        <input
          value={emailValue}
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p>Password</p>
        <input
          value={passwordValue}
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p>Confirm your password</p>
        <input
          value={confirmpasswordValue}
          type="text"
          onChange={(event) => {
            setConfirmpassword(event.target.value);
          }}
        />
        <input className="register" type="submit" value={"Register"} />
      </form>
      {setformulaire === true ? <StepTwo /> : ""}
    </div>
  );
};

export default Form;
