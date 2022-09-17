import React from "react";
import { moviesServ } from "../../Services/moviesServices";
import { useEffect, useState } from "react";
import ItemMovie from "./ItemMovie";
import TabsMovie from "./TabsMovie";
import { useDispatch } from "react-redux";
import {
  setLoadingOnAction,
  setLoadingOffAction,
} from "../../Redux/actions/actionSpinner";
export default function HomePage() {
  // Tạo useState movies
  const [movies, setMovies] = useState([]);
  // Tạo biến useDispatch gửi giá trị thay đổi(action) cho isLoading lên store
  const dispatch = useDispatch();
  // Gọi api
  useEffect(() => {
    // dispatch isLoading = on
    dispatch(setLoadingOnAction());
    // setState isLoading
    // Gọi api danh sách phim từ moviesServ
    moviesServ
      .getListMovie()
      .then((res) => {
        // setState isLoading
        console.log("data list movie: ", res);
        // setState cho movieList bằng data gọi về từ api
        setMovies(res.data.content);
        // dispatch isLoading = off
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        // setState isLoading
        console.log(err);
        // dispatch isLoading = off
        dispatch(setLoadingOffAction());
      });
  }, []);
  // Render card cho từng phim
  const renderMoviesCard = () => {
    return movies.slice(0, 10).map((data, index) => {
      return <ItemMovie key={index} data={data} />;
    });
  };
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-5 gap-4' id='lichChieu'>
        {renderMoviesCard()}
      </div>
      <div className='my-10' id='cumRap'>
        <p className='text-center text-xl'> THÔNG TIN RẠP VÀ PHIM ĐANG CHIẾU</p>
        <TabsMovie />
      </div>
    </div>
  );
}
