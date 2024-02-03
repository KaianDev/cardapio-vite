type LoginDataRequest = {
  email: string;
  password: string;
};
export const login = (data: LoginDataRequest) => {
  // TODO: lógica
  const user = true;
  if (user) return { email: data.email, token: "aaaasasa6s4as" };
};
