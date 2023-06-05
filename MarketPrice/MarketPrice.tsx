import React from 'react';
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
} from 'recharts';
import FishPriceData from '../../containers/MapPage/data/sanchoun_1001_1031.json';

// const data = [
//   {
//     date: '2022-11-01',
//     value: 100,
//   },
//   {
//     date: '2022-11-02',
//     value: 200,
//   },
//   {
//     date: '2022-11-03',
//     value: 300,
//   },
// ];

function MarketPrice() {
  return (
    <div className="o-page-subcontainer">
      <div className="o-page-subcontainer__header">
        <p className="c-page-subcontainer-title">市場價格</p>
        <p className="c-page-subcontainer-option">看更多</p>
      </div>
      <div>
        <div
          className="o-page-subcontainer-basicitem"
          style={{ width: 'calc(100% - 10px)', height: 'fit-content' }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <LineChart
              style={{ position: 'inherit' }}
              margin={{
                top: 30,
                right: 50,
                left: 30,
                bottom: 10,
              }}
              data={FishPriceData}
            >
              {/* 日期 */}
              <XAxis dataKey="Date" tick={{ fontSize: 10 }} />
              <YAxis />
              <Line dataKey="吳郭魚" type="monotone" stroke="#EA0000" activeDot={{ r: 8 }} />
              <Line dataKey="加州鱸" type="monotone" stroke="#FFD306" activeDot={{ r: 8 }} />
              <Line dataKey="金目鱸" type="monotone" stroke="#82D900" activeDot={{ r: 8 }} />
              <Line dataKey="七星鱸" type="monotone" stroke="#0072E3" activeDot={{ r: 8 }} />
              <Line dataKey="大頭鰱" type="monotone" stroke="#6F00D2" activeDot={{ r: 8 }} />
              {/* tooltip這樣就可以了 */}
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default MarketPrice;
