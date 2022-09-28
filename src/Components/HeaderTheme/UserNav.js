import { useSelector } from "react-redux";
import React from "react";
import { NavLink } from "react-router-dom";
import { localServ } from "../../Services/localServices";

export default function UserNav() {
  // lấy thông tin từ store về state bằng useSelector
  let user = useSelector((state) => {
    return state.userReducer.userInfor;
  });
  console.log("user", user);
  // hàm xử lí thao tác đăng xuất
  let handleLogout = () => {
    // xóa dữ liệu từ localstorage
    localServ.user.remove();
    // remove data từ redux
    // dispatch({
      // type: SET_USER,
      // payload: null
    // })
    // chuyển trang đến trang login
    window.location.href = "/login";
  };
  // viết hàm render thông tin user
  let renderUser = () => {
    console.log("renderUser");
    // nếu biến user lấy từ localstorage có giá trị (true)
    if (user) {
      return (
        <>
          {" "}
          <span className='mx-4 underline'> {user.taiKhoan}</span>
          <button
            onClick={handleLogout}
            className='border rounded px-5 py-1.5 text-red-500 hover:bg-white transition duration-300'>
            {" "}
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <div className='space-x-5 mx-5'>
            <NavLink to='/login'>
              <button className='border rounded transition hover:border-red-800 hover:bg-white border-black text-black px-5 py-2 hover:text-red-400'>
                {" "}
                Đăng nhập
              </button>
            </NavLink>
            <button className='border rounded transition hover:bg-red-500  border-red-500 px-5 py-2 text-black hover:text-white'>
              {" "}
              Đăng kí
            </button>
          </div>
        </>
      );
    }
  };
  //
  return <div>{renderUser()}</div>;
}
