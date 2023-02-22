import { Button, Form } from 'antd';
import React from 'react';
import { BtnSubmit } from './type';

function ButtonSubmit({ btnName }: BtnSubmit) {
  return (
    <div>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }} name="btn-submit">
        <Button type="primary" htmlType="submit">
          {btnName}
        </Button>
      </Form.Item>
    </div>
  );
}

export default ButtonSubmit;
