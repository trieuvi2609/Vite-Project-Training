import React, { useEffect } from 'react';
import { Button, Form, Input, Steps } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { validationOccupationInformationSchema } from './../../utils/validateFactory';
import useTrapFocus from './../../utils/useTrapFocus';
import ErrorMessage from '~/common/ErrorMessage';
import InputField from '~/common/InputField';

function Occupation() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      field: '',
      company: '',
      experience: '',
    },
    resolver: yupResolver(validationOccupationInformationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setFocus,
  } = form;
  const onSubmit: SubmitHandler<any> = async (data) => {
    if (data) {
      console.log('data2', data);
      navigate('/dashboard/loan');
    }
  };
  useEffect(() => {
    setFocus('field', { shouldSelect: true });
  }, [setFocus]);
  useTrapFocus('occupation-container');
  return (
    <div>
      <Steps
        size="small"
        current={1}
        items={[
          { title: 'Personal Information' },
          {
            title: 'Occupation Information',
          },
          {
            title: 'Loan Information',
          },
        ]}
      />
      <div className="login-container">
        <h1 className="login-title">Occupation information</h1>
        <Form
          id="occupation-container"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: '0px auto' }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleSubmit(onSubmit)}
        >
          <div className="input-container">
            <InputField form={form} name="field" />
            <ErrorMessage errors={form.formState.errors} name="field" />
          </div>
          <div className="input-container">
            <InputField form={form} name="company" />
            <ErrorMessage errors={form.formState.errors} name="company" />
          </div>
          <div className="input-container">
            <InputField form={form} name="experience" />
            <ErrorMessage errors={form.formState.errors} name="experience" />
          </div>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }} name="btn-submit">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Occupation;
