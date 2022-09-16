import React from "react";
import { Button, message, Checkbox, Form, Input } from "antd";
import { userServ } from "../../Services/userServies";
import { localServ } from "../../Services/localServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../Redux/constants/constantUser";
import bg_animate from "../../Assets/bg_animate.json";
import Lottie from "lottie-react";

export default function LoginPage() {
  // chuyển hướng trang bằng useNavigate từ react-router
  let navigate = useNavigate();
  // tạo dispatch để sử dụng redux
  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    // gọi hàm login từ userServ
    // truyền values chứa taiKhoan và matKhau vào param (dataLogin)
    userServ
      .postLogin(values)
      .then((res) => {
        console.log(res);
        // hiện thị message
        message.success("Đăng nhập thành công");
        // lưu vào USER storage
        localServ.user.setItem(res.data.content);
        // chuyển hướng sang trang chủ sau 1s
        setTimeout(() => {
          navigate("/");
        }, 1000);
        // dispatch lên store
        dispatch({
          type: SET_USER,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        message.error("Đăng nhập thất bại");
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className='container mx-auto h-screen w-screen flex items-center justify-center'>
      <div className='w-1/3 h-full'>
        <Lottie animationData={bg_animate}></Lottie>
      </div>
      <div className='w-1/2 h-full'>
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <Form.Item
            label='Username'
            name='taiKhoan'
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                message: "Please input your password!",
              },
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 11,
              span: 24,
            }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
