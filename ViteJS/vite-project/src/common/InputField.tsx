import React from 'react';
import { Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { InputProps } from './type';
import ErrorMessage from './ErrorMessage';

function InputField({ name, form }: InputProps) {
  const { register, control } = form;
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Form.Item label={name.toLocaleUpperCase()} name={name} style={{ height: '50px' }}>
            <Input {...register(name)} onChange={onChange} />
          </Form.Item>
        )}
      />
    </div>
  );
}

export default InputField;
