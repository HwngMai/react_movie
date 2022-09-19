// Action sử dụng thunk - gọi api sau khi dispatch
import { userServ } from "../../Services/userServies";
import { SET_USER } from "../constants/constantUser";
import { localServ } from "../../Services/localServices";
// tạo biến setUserLoginSuccess chứa dữ liệu dispatch
const setUserLoginSuccess = (successValue) => {
  return {
    type: SET_USER,
    payload: successValue,
  };
};
// action có api *__Serv
// truyền 2 callback onLoginSuccess, onLoginFail xử lí thêm râu ria
export const setUserLoginActionServ = (
  dataLogin,
  onLoginSuccess,
  onLoginFail
) => {
  return (dispatch) => {
    // gọi api
    userServ
      .postLogin(dataLogin)
      //
      .then((res) => {
        console.log("data User: ", res);
        // lưu vào USER storage
        localServ.user.setItem(res.data.content);
        // dispatch dữ liệu
        dispatch(setUserLoginSuccess(res.data.content));
        onLoginSuccess();
      })
      .catch((err) => {
        console.log(err);
        onLoginFail();
      });
  };
};
