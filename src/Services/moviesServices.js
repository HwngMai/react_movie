import { https, TOKEN_CYBERSOFT } from "./configURL";
// tạo obj chứa các axios gọi api liên quan đến phim

export const moviesServ = {
  // gọi data tạo list phim show trên main page
  getListMovie: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05";
    //truyền uri cho axios.create tạo từ biến https bằng cú pháp https.get(uri) => hoàn thành cú pháp axios
    return https.get(uri);
  },
  // gọi data tạo list hiển thị phim theo rạp
  getMovieByTheater: () => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05";
    //truyền uri cho axios.create tạo từ biến https bằng cú pháp https.get(uri) => hoàn thành cú pháp axios
    return https.get(uri);
  },
  getListMovieCarousel: () => {
    let uri = "api/QuanLyPhim/LayDanhSachBanner";
    //truyền uri cho axios.create tạo từ biến https bằng cú pháp https.get(uri) => hoàn thành cú pháp axios
    return https.get(uri);
  },
};
