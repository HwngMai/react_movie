import React from "react";
import { useSelector } from "react-redux";
export default function BillCheck({ data }) {
  //1. lấy thông tin ghế đang đặt từ reducer
  const { danhSachGheDangDat } = useSelector((state) => state.checkoutReducer);
  //1.1 gán state cho danhSachGheDangDat để render
  //2. lấy thông tin người dùng
  // lấy thông tin từ store về state bằng useSelector
  //3. hàm render số tiền và số ghế
  let renderBill = () => {
    let tongTien = 0;
    return (
      <div className='flex justify-center items-center flex-col'>
        <p> Các ghế đã chọn - Giá vé:</p>
        {danhSachGheDangDat?.map((ghe, index) => {
          tongTien += ghe.giaVe;
          return (
            <div
              key={index}
              className='flex justify-between items-center flex-row'>
              {" "}
              <p className='text-m text-center text-rose-500'>
                {" "}
                {ghe.stt} - {ghe.giaVe}
              </p>
            </div>
          );
        })}
        <p className='text-m underline text-center text-red-800'>
          {" "}
          Tổng tiền: {tongTien}{" "}
        </p>
      </div>
    );
  };
  const user = useSelector((state) => {
    return state.userReducer.userInfor;
  });
  return (
    <div className=' billCheck col-span-4 w-1/4 border rounded-lg '>
      <h3 className=' text-xl text-center text-red-800 pt-3'>
        {" "}
        Thẻ thanh toán{" "}
      </h3>
      <hr />
      <h3 className='text-m text-center text-rose-500'>
        Tên phim: {data.thongTinPhim?.tenPhim}
      </h3>
      <p className='text-m text-center text-rose-500'>
        {" "}
        Địa điểm: {data.thongTinPhim?.diaChi}
      </p>
      <p className='text-m text-center text-rose-500'>
        {" "}
        Ngày chiếu: {data.thongTinPhim?.ngayChieu} - {data.thongTinPhim?.tenRap}{" "}
      </p>
      <hr />
      <div className='grid text-center text-black'>
        <p>Thông tin người dùng: {user.hoTen}</p>
        <p>Số điện thoại: {user.soDT}</p>
        <p>Email: {user.email}</p>
      </div>
      <hr />
      {renderBill()}
      <div className='rounded h-10 flex items-center justify-center bg-red-300 text-black hover:text-white hover:bg-red-500 transtion duration-300 cursor-pointer hover:shadow'>
        {" "}
        Đặt vé{" "}
      </div>
    </div>
  );
}
