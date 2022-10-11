import React from "react";
import {
  Button,
  Select,
  Modal,
  DatePicker,
  Rate,
  Form,
  Input,
  message,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch } from "react-redux";
import { useState } from "react";
const AddMovie = () => {
  // tạo dispatch để sử dụng redux
  let dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // tạo biến initiavalues

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //config date picker
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  // button submit
  const onFinish = (values) => {
    console.log("Success:", values);
    //tạo dataEdit bằng mảng lấy từ value, thêm các key
    // let dataPlus = { maNhom: "GP04", maLoaiNguoiDung: "khachHang" };
    // let dataEdit = { ...values, ...dataPlus };
    // tạo 2 func callBack: onSuccess, onFail cho setUserRegisActionServ
    let onSuccess = () => {
      // hiện thị message
      message.success("Cập nhật thành công!");
    };
    let onFail = () => {
      message.error("Cập nhật thất bại");
    };
    // // dispatch value sử dụng action từ actionUser kèm 2 callback func lên action
    // dispatch(setUserEditActionServ(dataEdit, onSuccess, onFail));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className='mb-5'>
      <Button type='primary' onClick={showModal}>
        Thêm Phim
      </Button>
      <Modal
        width={900}
        title='Thêm phim'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className='modalEdit'>

        <Form

          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className='w-full '
          layout='horizontal'
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
          <Form.Item label='Tên Phim' disabled={true}>
            <Input
              placeholder='Tên phim'
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập vào tên phim",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label='Ngày khởi chiếu' {...config}>
            <DatePicker
              onFieldsChange={(ngayKhoiChieu) => {
                console.log("ngayKhoiChieu: ", ngayKhoiChieu);
              }}
              showTime
              format='YYYY-MM-DD HH:mm:ss'
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn ngày khởi chiếu",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label='Đánh giá'>
            <Rate
              count={10}
              onChange={(value) => {
                console.log("value: ", value);
              }}
            />
          </Form.Item>
          <Form.Item
            label='Hình Ảnh'
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào url Poster phim!",
              },
            ]}>
            <Input placeholder='Url poster' />
          </Form.Item>
          <Form.Item
            label='Trailer'
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào url Trailer",
              },
            ]}>
            <Input placeholder='Url trailer phim' />
          </Form.Item>
          <Form.Item
            label='Mô tả'
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào Mô tả!",
              },
            ]}>
            <TextArea placeholder='Mô tả phim' maxLength={6} />
          </Form.Item>
          <Form.Item label='Tình trạng'>
            <Select placeholder='Chọn tình trạng của phim'>
              <Select.Option value='dangChieu'>Đang chiếu</Select.Option>
              <Select.Option value='sapChieu'>Sắp chiếu</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 11,
              span: 24,
            }}>
            <Button type='primary' htmlType='submit'>
              Thêm phim
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddMovie;
