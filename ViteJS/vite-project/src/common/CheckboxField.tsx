import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { InputProps } from './type';
import ErrorMessage from './ErrorMessage';

function CheckboxField({ name, form }: InputProps) {
  const { register, control } = form;
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Form.Item label={name.toLocaleUpperCase()} name={name} style={{ height: '50px' }}>
            <Checkbox
              checked={value}
              {...register(name)}
              onChange={(e) => {
                onChange(e.target.checked);
              }}
            />
          </Form.Item>
        )}
      />
    </div>
  );
}

export default CheckboxField;
