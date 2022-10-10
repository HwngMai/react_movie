import React, { useState } from "react";
import { Button, Checkbox, Modal, Form, Input } from "antd";
export default function EditUserPage({ data }) {
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

  return (
    <>
      <Button type='danger' onClick={showModal}>
        Sửa
      </Button>
      <Modal
        title={`Thay đổi thông tin người dùng: ${data.hoTen}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Form
          className='w-full '
          layout='vertical'
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={
            {
              // remember: true,
            }
          }
          autoComplete='off'>
          <Form.Item
            label='Tên tài khoản'
            name='taiKhoan'
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào tên tài khoản!",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label='Password'
            name='matKhau'
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào Password!",
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            label='Nhập lại Password '
            name='matKhauCheck'
            rules={[
              {
                required: true,
                message: "Vui lòng nhập lại Password!",
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            label='Họ tên'
            name='hoTen'
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào họ tên!",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='email'
            name='email'
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào email!",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label='Số điện thoại'
            name='soDt'
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào số điện thoại!",
              },
            ]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
