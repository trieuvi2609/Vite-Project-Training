import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Steps, DatePicker, Modal, Result } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationLoanInformationSchema } from '~/utils/validateFactory';
import { useNavigate } from 'react-router-dom';
import InputField from '~/common/InputField';
import ErrorMessage from './../../common/ErrorMessage';
import './Loan.scss';
import ButtonSubmit from '~/common/ButtonSubmit';

function Loan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      amount: '',
      interest: '',
      mortgage: '',
    },
    resolver: yupResolver(validationLoanInformationSchema),
  });
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  //   setFocus,
  // } = useForm({
  //   defaultValues: {
  //     amount: '',
  //     interest: '',
  //     mortgage: '',
  //   },
  //   // resolver: yupResolver(validationLoanInformationSchema),
  // });
  const onSubmit: SubmitHandler<any> = async (data) => {
    if (data) {
      console.log(data);
      setIsModalOpen(true);
    }
  };
  return (
    <div>
      <Steps
        size="small"
        current={2}
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
        <h1 className="login-title">Loan information</h1>
        <Form
          style={{ maxWidth: 600, margin: '0px auto' }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={form.handleSubmit(onSubmit)}
        >
          <div className="input-container">
            <InputField form={form} name="amount" />
            <ErrorMessage errors={form.formState.errors} name="amount" />
          </div>
          <div className="input-container">
            <InputField form={form} name="interest" />
            <ErrorMessage errors={form.formState.errors} name="interest" />
          </div>
          <div className="input-container">
            <InputField form={form} name="mortgage" />
            <ErrorMessage errors={form.formState.errors} name="mortgage" />
          </div>
          <ButtonSubmit btnName="Submit" />
        </Form>
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Result status="success" title="Successfully" />
      </Modal>
    </div>
  );
}

export default Loan;
