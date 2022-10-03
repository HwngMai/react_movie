import { message } from "antd";
import React from "react";
import { useEffect } from "react";
import { localServ } from "../Services/localServices";
import { useNavigate } from "react-router-dom";
import { VscRocket } from "react-icons/vsc";
// Func component Layout giúp tạo bộ khung cho các components
// các components cần được sắp xếp được xem như các props truyền vào cho func Comp Layout này
export default function CheckoutLayout({ Component }) {
  let navigate = useNavigate();
  // kiểm tra localstorage đã chứa biến user chưa
  useEffect(() => {
    let userLocal = localServ.user.get();
    // nếu chưa có show message rồi chuyển sang login
    if (!userLocal) {
      message.warning({
        content: "Vui lòng đăng nhập để đặt vé",
        className: "mt-20",
        duration: 2,
      });
      setTimeout(() => {
        navigate("/login");
      }, 0);
    }
  }, []);
  return (
    <div className=''>
      <div className='h-20 flex underline justify-between mx-auto items-center bg-red-300 px-4'>
        <span className=' flex text-3xl text-black items-center justify-center font-bold'>
          {" "}
          <VscRocket /> CYBERFLIX - TRANG THANH TOÁN
        </span>
      </div>
      <div className='pt-20 -z-10 w-full'>
        <Component />
      </div>
    </div>
  );
}