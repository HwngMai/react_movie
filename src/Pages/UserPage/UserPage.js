import React from "react";
import { Tabs } from "antd";
import UserInfo from "../../Components/User/UserInfo";
import UserRev from "../../Components/User/UserRev";
import { useParams } from "react-router-dom";
import { userServ } from "../../Services/userServies";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setLoadingOnAction,
  setLoadingOffAction,
} from "../../Redux/actions/actionSpinner";
const UserPage = () => {
  //1. lấy id bằng cú pháp useParam()
  const user = useParams();
  console.log("taiKhoan: ", user.taiKhoan);
  //2. setState = useState
  const [userInfo, setUserInfo] = useState([]);
  // Tạo biến useDispatch gửi giá trị thay đổi(action) cho isLoading lên store
  const dispatch = useDispatch();
  //3. truyền id vào useEffect gọi data movie qua api 1 lần duy nhất
  useEffect(() => {
    // dispatch set isLoading = on
    dispatch(setLoadingOnAction());
    // gọi data
    userServ
      .postUserInfo(user.taiKhoan)
      .then((res) => {
        console.log("thong tin tai khoan: ", res);
        // setState cho movieSche bằng data gọi về từ api
        setUserInfo(res.data.content);
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
    <div className='container mx-auto h-4/5 '>
      <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab='Thông tin cá nhân' key='1'>
          <UserInfo userInfo={userInfo} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Vé đã đặt' key='2'>
          <UserRev userInfo={userInfo} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default UserPage;
