import { navigate } from "gatsby";
import React from "react";
import { handleLogin, isLoggedIn } from "../services/auth";

const Login: React.FC<{ path: string }> = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleUpdateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleUpdatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin({ username, password });
  };

  return (
    <div>
      <title>Login</title>
      <header>Header Login</header>
      <main>
        {isLoggedIn() && navigate(`/app/profile`)}
        <React.Fragment>
          <h1>Log in</h1>
          <div>
            <p>
              This is just a training app without real authentication mechanism
              <br />
              That is why login works only for hard coded values:
              <br />
              User: <em>`john`</em>
              <br />
              Password: <em>`pass`</em>
            </p>
          </div>
          <form
            method="post"
            onSubmit={(event) => {
              handleSubmit(event);
              navigate(`/app/profile`);
            }}
          >
            <label>
              Username
              <input
                type="text"
                name="username"
                onChange={handleUpdateUsername}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                onChange={handleUpdatePassword}
              />
            </label>
            <input type="submit" value="Log In" />
          </form>
        </React.Fragment>
      </main>
    </div>
  );
};

export default Login;
