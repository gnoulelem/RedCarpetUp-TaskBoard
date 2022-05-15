export const emailValidator = (email: string): string[] => {
  const errors: string[] = [];
  const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailReg.test(email)) {
    errors.push('Email not valid');
  }
  return errors;
};

export const usernameValidator = (username: string): string[] => {
  const errors: string[] = [];
  if (username.length < 5) {
    errors.push('Username must be at least 5 characters long');
  }
  return errors;
};

export const passwordValidator = (password: string): string[] => {
  const errors: string[] = [];
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  return errors;
};
