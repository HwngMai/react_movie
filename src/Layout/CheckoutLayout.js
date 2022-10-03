import { message } from "antd";
import React from "react";
import { useEffect } from "react";
import { localServ } from "../Services/localServices";
import { useNavigate } from "react-router-dom";
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
  // let renderCheckout = () => {
  //   if (userLocal) {
  //     return (
  //       <>
  //         <div className=''>
  //           <div className='fixed top-0 left-0 w-full z-10'>
  //             This is checkout page
  //           </div>
  //           <div className='pt-20 -z-10 w-full'>
  //             <Component />
  //           </div>
  //         </div>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <div className='fixed top-0 left-0 w-full z-10'>Vui lòng đăng nhập</div>
  //     );
  //   }
  // };
  return (
    <div className=''>
      <div className='fixed top-0 left-0 w-full z-10'>
        This is checkout page
      </div>
      <div className='pt-20 -z-10 w-full'>
        <Component />
      </div>
    </div>
  );
}
