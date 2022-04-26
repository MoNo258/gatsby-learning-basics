export const isBrowser = () => typeof window !== "undefined";

interface IGatsbyUser {
  email: string;
  name: string;
  username: string;
}
interface IGatsbyLogin {
  username: string;
  password: string;
}

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser")!)
    : {};

const setUser = (user: IGatsbyUser) =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleLogin = ({ username, password }: IGatsbyLogin) => {
  if (username === `john` && password === `pass`) {
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  const user = getUser();

  return !!user.username;
};

export const logout = (callback: () => void) => {
  setUser({ email: "", name: "", username: "" });
  callback();
};
