import moment from "moment";
import React from "react";
export default function ItemTabsMovie({ data }) {
  return (
    <div className='p-3 flex gap-5 shadow-lg space-x-5 '>
      <img className='w-32 h-40 object-cover ' alt='cover' src={data.hinhAnh} />
      <div>
        <p className='text-lg'>{data.tenPhim}</p>
        <div className='grid grid-cols-3 gap-5 '>
          {data.lstLichChieuTheoPhim.slice(0, 9).map((gioChieu) => {
            return (
              <div className='p-3 rounded bg-red-300 text-white hover:text-black transtion duration-300 cursor-pointer'>
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
