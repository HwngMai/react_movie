import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { moviesServ } from "../../Services/moviesServices";
import {
  setLoadingOnAction,
  setLoadingOffAction,
} from "../../Redux/actions/actionSpinner";

export default function CheckoutPage() {
  //1. lấy id bằng cú pháp useParam()
  const maLichChieu = useParams();
  console.log("id lịch chiếu: ", maLichChieu.id);
  //2. lấy thông tin người dùng
  // lấy thông tin từ store về state bằng useSelector
  let user = useSelector((state) => {
    return state.userReducer.userInfor;
  });
  //3. tạo state cho thông tin show chiếu
  const [showDetail, setShowDetail] = useState([]);
  // Tạo biến useDispatch gửi giá trị thay đổi(action) cho isLoading lên store
  const dispatch = useDispatch();
  //4. lấy thông tin show chiếu
  // truyền id vào useEffect gọi data show qua api 1 lần duy nhất:
  useEffect(() => {
    // dispatch set isLoading = on
    dispatch(setLoadingOnAction());
    // gọi data
    moviesServ
      .getShow(maLichChieu.id)
      .then((res) => {
        console.log("data show: ", res);
        // setstate cho show
        setShowDetail(res.data.content);
        // dispatch set isLoading = off
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        console.log(err);
        // dispatch set isLoading = off
        dispatch(setLoadingOffAction());
      });
  }, []);

  return (
    <div className='container m-auto'>
      CheckoutPage cho {maLichChieu.id}
      <div className='flex flex-row justify-between items-start'>
        <div className='col-span-8 w-2/3 rounded-sm'>
          <p className='text-m text-left text-rose-500'>Thông tin chỗ ngồi:</p>
          <div className='soDoRap w-full h-full '>
            <div className='manHinh h-10 bg-slate-500 text-center shadow-2xl m-5'>
              <p className='text-center'> Màn Hình</p>
            </div>
            <div className='soDoGhe w-full h-full  grid grid-cols-4 gap-5'>
              <div className='ghe w-10 h-10 border flex justify-center items-center bg-orange-300'>
                Ghế
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-4 w-1/3 border rounded-lg '>
          <h3 className='text-xl text-center text-red-800 '>
            {" "}
            Tổng tiền: 0 Đ{" "}
          </h3>
          <hr />
          <h3 className='text-m text-center text-rose-500'>Tên phim: </h3>
          <p className='text-m text-center text-rose-500'> Địa điểm: </p>
          <p className='text-m text-center text-rose-500'>
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
            <p className='text-m text-center text-rose-500'> Số ghế: </p>
            <p className='text-m text-center text-red-800'> Tiền: </p>
          </div>
        </div>
      </div>
    </div>
  );
}
