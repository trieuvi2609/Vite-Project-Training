import Typography from 'antd/es/typography/Typography';
import React from 'react';
import { ErrorMessageProps } from './type';
import './error.scss';

function ErrorMessage({ errors, name }: any) {
  return (
    <>
      <p className="error-message">{errors[name]?.message}</p>
    </>
  );
}

export default ErrorMessage;
