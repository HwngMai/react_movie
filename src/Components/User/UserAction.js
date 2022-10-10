import { message } from "antd";
import React from "react";
import { userServ } from "../../Services/userServies";

export default function UserAction({ taiKhoan, onSuccess }) {
  // hàm xóa user
  let handleDeleteUser = () => {
    userServ
      .deleteUser(taiKhoan)
      .then((res) => {
        console.log(res);
        message.success("Xóa User thành công");
        // gọi lại callback onSuccess
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
        message.error("Không thể xóa User");
      });
  };
  return (
    <div>
      <button
        className='bg-red-500 hover:bg-red-700 bg-transparent hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mx-1'
        onClick={handleDeleteUser}>
        Xóa
      </button>
      <button className='bg-yellow-500 hover:bg-yellow-700 bg-transparent hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mx-1'>
        Sửa
      </button>
    </div>
  );
}
