import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function CheckoutPage() {
  //1. lấy id bằng cú pháp useParam()
  const maLichChieu = useParams();
  console.log("id lịch chiếu: ", maLichChieu.id);
  //2. lấy thông tin người dùng
  // lấy thông tin từ store về state bằng useSelector
  let user = useSelector((state) => {
    return state.userReducer.userInfor;
  });
  return (
    <div className='container m-auto'>
      CheckoutPage cho {maLichChieu.id}
      <div className='flex flex-row justify-between items-start'>
        <div className='col-span-8 w-2/3'>
          <p className='text-m text-left text-rose-500'>Thông tin chỗ ngồi:</p>
        </div>
        <div className='col-span-4 w-1/3 border rounded-lg '>
          <h3 className='text-xl text-center text-green-500 '>
            {" "}
            Tổng tiền: 0 Đ{" "}
          </h3>
          <hr />
          <h3 className='text-m text-center text-black'>Tên phim: </h3>
          <p className='text-m text-center text-black'> Địa điểm: </p>
          <p className='text-m text-center text-black'>
            {" "}
            Ngày chiếu: - Rạp: -{" "}
          </p>
          <hr />
          <div className='grid text-center text-black'>
            <p>Thông tin người dùng: {user.hoTen}</p>
            <p>Số điện thoại: {user.soDT}</p>
            <p>Email: {user.email}</p>
          </div>
          <hr />
          <div className='grid grid-cols-2  '>
            <p className='text-m text-center text-rose-500'> Ghế</p>
            <p className='text-m text-center text-green-500'> Tiền</p>
          </div>
        </div>
      </div>
    </div>
  );
}
