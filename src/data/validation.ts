import * as Yup from 'yup';

export const signupValidationSchema = Yup.object().shape({
  userId: Yup.string().email().required(),
  fullName: Yup.string().required(),
  userName: Yup.string().required(),
  password: Yup.string().required().min(6),
});

export const loginValidationSchema = Yup.object().shape({
  userId: Yup.string().email().required(),
  password: Yup.string().required().min(6),
});