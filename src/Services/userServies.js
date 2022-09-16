import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "./configURL";
export const userServ = {
  postLogin: (dataLogin) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: dataLogin,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
};
