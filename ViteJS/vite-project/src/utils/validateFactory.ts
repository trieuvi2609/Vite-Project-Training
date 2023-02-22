import * as yup from 'yup';
import { REQUIRED, VALIDATION_PASSWORD } from './validation';

export const validationLoginSchema = yup.object().shape({
  username: REQUIRED('This field must be required'),
  password: VALIDATION_PASSWORD('This field must have at least 5 characters'),
});
export const validationPersonalInformationSchema = yup.object().shape({
  fullname: REQUIRED('This field must be required'),
  dayOfBirth: REQUIRED('This field must be required'),
  address: REQUIRED('This field must be required'),
});
export const validationOccupationInformationSchema = yup.object().shape({
  field: REQUIRED('This field must be required'),
  company: REQUIRED('This field must be required'),
  experience: REQUIRED('This field must be required'),
});
export const validationLoanInformationSchema = yup.object().shape({
  amount: REQUIRED('This field must be required'),
  interest: REQUIRED('This field must be required'),
  mortgage: REQUIRED('This field must be required'),
});
