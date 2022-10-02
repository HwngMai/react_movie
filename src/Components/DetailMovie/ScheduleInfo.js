import React from "react";
import { Tabs } from "antd";
import moment from "moment";
export default function ScheduleInfo({ data }) {
  console.log("data schedule: ", data);
  let renderSchedule = () => {
    return data.heThongRapChieu?.map((htr, index) => {
      return (
        <Tabs.TabPane
          tab={<img className='w-16 h-16' src={htr.logo} />}
          key={index}>
          {/* content của tab ở đây */}
          <div key={index} className='grid grid-cols-4 gap-4'>
            {htr.cumRapChieu?.map((lichChieuPhim, index) => {
              return (
                <div
                  key={index}
                  className='pt-3 flex items-center justify-center rounded bg-red-300 text-black hover:text-white hover:bg-red-500 transtion duration-300 cursor-pointer hover:shadow'>
                  <p>{lichChieuPhim.tenRap}</p>
                  <p>
                    {" "}
                    {moment(lichChieuPhim.ngayChieuGioChieu).format(
                      "DD-MM-YYYY ~ hh:MM"
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </Tabs.TabPane>
      );
    });
  };
  return (
    <div className='font-link'>
      <p className='text-center text-xl font-link underline'> Đặt vé {data.tenPhim} </p>
      <Tabs style={{ height: 310 }} tabPosition='left' defaultActiveKey='1'>
        {renderSchedule()}
      </Tabs>
    </div>
  );
}

{
  /* <Tabs defaultActiveKey="1">
<Tabs.TabPane tab="Tab 1" key="1">
  Content of Tab Pane 1
</Tabs.TabPane>
<Tabs.TabPane tab="Tab 2" key="2">
  Content of Tab Pane 2
</Tabs.TabPane>
<Tabs.TabPane tab="Tab 3" key="3">
  Content of Tab Pane 3
</Tabs.TabPane>
</Tabs> */
}
