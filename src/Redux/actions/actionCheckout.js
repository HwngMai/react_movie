// Action ko sử dụng thunk - lấy dữ liệu từ data đã được gọi api trước đó
import { SET_DAT_VE } from "../constants/constantCheckout";
// action creator không có api
export const setDatVe = (ghe) => {
  return {
    type: SET_DAT_VE,
    gheDuocChon: ghe,
  };
};
