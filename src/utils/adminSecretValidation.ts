export const adminSecretValidation = (admin: string) => {
    if (admin === process.env.ADMIN_SECRET1) {
      return true;
    } else {
      return false;
    }
  };