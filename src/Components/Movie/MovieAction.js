import { message } from "antd";
import React from "react";
import { userServ } from "../../Services/userServies";
import { useState } from "react";
import EditMovie from "../Movie/EditMovie";
import { moviesServ } from "../../Services/moviesServices";

export default function MovieAction({ maPhim, onSuccess }) {
  const [movieEdit, setMovieEdit] = useState([]);
  // hàm xóa user
  let handleDeleteUser = () => {
    console.log("maPhim: ", maPhim);
    moviesServ
      .deleteMovie(maPhim)
      .then((res) => {
        console.log(res);
        message.success("Xóa Phim thành công!");
        // gọi lại callback onSuccess
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
        message.error("Đã có user đã đặt vé, Không thể xóa Phim!");
      });
  };
  let handleEditUser = () => {
    moviesServ
      .getDetailMovie(maPhim)
      .then((res) => {
        console.log("data movie edit: ", res);
        setMovieEdit(res.data.content);
        // hiển thị thông tin user lên input
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=' flex'>
      <button
        className='bg-red-500 hover:bg-red-700 bg-transparent hover:text-white px-4 border border-red-500 hover:border-transparent h-8 rounded-sm mx-1'
        onClick={handleDeleteUser}>
        Xóa
      </button>
      <div className='' onClick={handleEditUser}>
        <EditMovie data={movieEdit} />
      </div>
    </div>
  );
}
