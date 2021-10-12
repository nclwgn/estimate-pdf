type LoginFunction = (username: string, password: string) => Promise<void>;

const useAuth = (): {login: LoginFunction} => {
  const login = (username: string, password: string): Promise<void> => {
    return new Promise(r => setTimeout(r, 2500));
  }

  return {
    login
  }
};

export default useAuth;