import moment from "moment";
import React from "react";
export default function ItemTabsMovie({ data }) {
  return (
    <div className='p-3 flex gap-5 shadow-lg space-x-5 '>
      <img className='w-32 h-40 object-cover ' alt='cover' src={data.hinhAnh} />
      <div>
        <p className='text-lg'>{data.tenPhim}</p>
        <div className='grid grid-cols-3 gap-5 '>
          {data.lstLichChieuTheoPhim.slice(0, 9).map((gioChieu, index) => {
            return (
              <div
                key={index}
                className='p-3 rounded bg-red-300 text-black hover:bg-red-500 transtion duration-300 cursor-pointer hover:shadow'>
                {moment(gioChieu.ngayChieuGioChieu).format(
                  "DD-MM-YYYY ~ hh:MM"
                )}
              </div>
            );
          })}
        </div>
      </div>  
    </div>
  );
}
