import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { moviesServ } from "../../Services/moviesServices";
import {
  setLoadingOnAction,
  setLoadingOffAction,
} from "../../Redux/actions/actionSpinner";
import MovieInfo from "../../Components/DetailMovie/MovieInfo";
//
const DetailMovie = () => {
  //1. lấy id bằng cú pháp useParam()
  const maPhim = useParams();
  console.log("id page: ", maPhim);
  //2. setState = useState
  const [movieDetail, setMovieDetail] = useState([]);
  // Tạo biến useDispatch gửi giá trị thay đổi(action) cho isLoading lên store
  const dispatch = useDispatch();
  //3. truyền id vào useEffect gọi data movie qua api 1 lần duy nhất
  useEffect(() => {
    // dispatch set isLoading = on
    dispatch(setLoadingOnAction());
    // setState isLoading
    // Gọi api danh sách phim từ moviesServ
    moviesServ
      .getDetailMovie(maPhim.id)
      .then((res) => {
        console.log("detail movie: ", res);
        // setState cho movie bằng data gọi về từ api
        setMovieDetail(res.data.content);
        // dispatch set isLoading = off
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        console.log(err);
        // dispatch set isLoading = off
        dispatch(setLoadingOffAction());
      });
  }, []);
  //4. render card cho từng phim
  const renderMovieDetail = () => {
    return <MovieInfo data={movieDetail} />;
  };
  //1.

  //
  return <div className='container mx-auto'>{renderMovieDetail()}</div>;
};

export default DetailMovie;
