import { Button, Checkbox, Form, Input, message } from 'antd';
import { useEffect, useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './Login.scss';
import { validationLoginSchema } from '~/utils/validateFactory';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { trapFocus } from '~/utils/trapFocus';
import { log } from 'console';
import useTrapFocus from './../../utils/useTrapFocus';
import ButtonSubmit from '~/common/ButtonSubmit';
import InputField from '~/common/InputField';
import ErrorMessage from '~/common/ErrorMessage';
import CheckboxField from '~/common/CheckboxField';
import request from '~/api/fetchCaller';
import { useAppDispatch } from '~/utils/hooks';
import { login, loginSuccess, loginFailed, logout, LoginPayload } from './redux/loginReducer';

function Login() {
  const dispatch = useAppDispatch();
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
    resolver: yupResolver(validationLoginSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setFocus,
  } = form;
  const navigate = useNavigate();
  useEffect(() => {
    setFocus('username', { shouldSelect: true });
  }, [setFocus]);

  const handleLoginClick = (dataLogin: LoginPayload) => {
    dispatch(
      login({
        username: dataLogin.username,
        password: dataLogin.password,
      }),
    );
  };

  const onSubmit: SubmitHandler<any> = async (data) => {
    handleLoginClick(data);
    // Login
    // try {
    //   const response = await axios.post(`http://localhost:3001/signin`, {
    //     username: data.username,
    //     password: data.password,
    //   });
    //   console.log('response', response);
    //   if (response.status === 200) {
    //     localStorage.setItem('accessToken', response.data.accessToken);
    //     navigate('/dashboard');
    //   }
    // } catch (error) {
    //   alert(error);
    // }

    // try {
    //   const responseLogin = await request(
    //     `http://localhost:3001/signin`,
    //     'POST',
    //     {
    //       username: data.username,
    //       password: data.password,
    //     },
    //     false,
    //   );
    //   console.log(responseLogin);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  // trap focus
  useTrapFocus('login-container');

  return (
    <div>
      <div className="login-container">
        <h1 className="login-title">Login page</h1>
        <Form
          id="login-container"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: '0px auto' }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className="input-container">
            <InputField form={form} name="username" />
            <ErrorMessage errors={errors} name="username" />
          </div>
          <div className="input-container">
            <InputField form={form} name="password" />
            <ErrorMessage errors={errors} name="password" />
          </div>
          <CheckboxField name="remember" form={form} />
          <ButtonSubmit btnName="Login" />
        </Form>
      </div>
    </div>
  );
}

export default Login;
