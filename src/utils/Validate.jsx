export const Validate = (email, password) => {
  const errors = [];

  // Email
  if (!email) {
    errors.push("Email is required");
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  ) {
    errors.push("Email format is invalid");
  }

  // Password rules
  if (!password) {
    errors.push("Password is required");
  } else {
    if (!/[A-Z]/.test(password)) {
      errors.push("At least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("At least one lowercase letter");
    }
    if (!/\d/.test(password)) {
      errors.push("At least one number");
    }
    if (password.length < 6) {
      errors.push("Minimum 6 characters");
    }
    if (/\s/.test(password)) {
      errors.push("No spaces allowed");
    }
  }

  return errors;
};
