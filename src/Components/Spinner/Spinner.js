import React from "react";
import { FadeLoader } from "react-spinners";
import { useSelector } from "react-redux";
export default function Spinner() {
  // Tạo useSelector để kiểm tra isLoading từ redux cho comp Spinner
  let { isLoading } = useSelector((state) => state.spinnerReducer);
  // Kiểm tra isLoading render nếu == true
  return isLoading ? (
    <div className='h-screen w-screen fixed left-0 top-0 bg-rose-900 flex justify-center bg-opacity-70 items-center z-50'>
      <FadeLoader radius='4' speedMultiplier='0.5' color='#E71D36' />
    </div>
  ) : (
    <></>
  );
}
