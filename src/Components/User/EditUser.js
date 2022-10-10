import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
export default function EditUser({ data }) {
  console.log("data EditUserPage: ", data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // tạo biến initiavalues
  let hoTen = data.hoTen;
  let email = data.email;
  let soDT = data.soDT;

  // modal setting
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // button submit
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
            {" "}
            <Input placeholder={data.taiKhoan} disabled={true} />
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
            <Input placeholder={hoTen} />
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
            <Input placeholder={email} />
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
            <Input placeholder={soDT} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 24,
            }}>
            <Button type='primary' htmlType='submit'>
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
