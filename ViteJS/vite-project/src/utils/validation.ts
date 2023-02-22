// eslint-disable-next-line prettier/prettier
import * as yup from 'yup';
// eslint-disable-next-line prettier/prettier
// export const REQUIRED = yup.string().required('This field is required');
// eslint-disable-next-line prettier/prettier
export const VALIDATION_PASSWORD = (validationMessage: string) => {
  return yup.string().required('This field is required').min(5, validationMessage);
};
export const REQUIRED = (validationMessage: string) => {
  return yup.string().required(validationMessage);
};
