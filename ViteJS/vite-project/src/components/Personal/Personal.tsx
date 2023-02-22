import { useEffect } from 'react';
import { Button, Form, Input, Steps, DatePicker } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationPersonalInformationSchema } from '~/utils/validateFactory';
import { useNavigate } from 'react-router-dom';
import useTrapFocus from './../../utils/useTrapFocus';
import ButtonSubmit from '~/common/ButtonSubmit';
import ErrorMessage from './../../common/ErrorMessage';
import InputField from '~/common/InputField';

function Personal() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      fullname: '',
      dayOfBirth: '',
      address: '',
    },
    resolver: yupResolver(validationPersonalInformationSchema),
  });
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log('data', data);
    if (data) {
      navigate('/dashboard/occupation');
    }
  };

  useEffect(() => {
    form.setFocus('fullname', { shouldSelect: true });
  }, [form.setFocus]);

  // trapFocus
  useTrapFocus('personal-container');
  return (
    <div>
      <Steps
        size="small"
        current={0}
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
        <h1 className="login-title">Personal information</h1>
        <Form
          id="personal-container"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: '0px auto' }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={form.handleSubmit(onSubmit)}
        >
          <div className="input-container">
            <InputField form={form} name="fullname" />
            <ErrorMessage errors={form.formState.errors} name="fullname" />
          </div>
          <div className="input-container">
            <InputField form={form} name="dayOfBirth" />
            <ErrorMessage errors={form.formState.errors} name="dayOfBirth" />
          </div>

          <div className="input-container">
            <InputField form={form} name="address" />
            <ErrorMessage errors={form.formState.errors} name="address" />
          </div>
          <ButtonSubmit btnName="Submit" />
        </Form>
      </div>
    </div>
  );
}

export default Personal;
