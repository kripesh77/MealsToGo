import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const registerService = async (email, password) => {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};
