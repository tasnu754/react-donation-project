import { PieChart, Pie, Tooltip, Cell } from "recharts";
// import React, { PureComponent } from "react";
// import {  ResponsiveContainer } from "recharts";



const Statistic = () => {

    const getLocal = JSON.parse(localStorage.getItem("DonatedCards")) || [];

    let mydonate = 0;
    let total = 0;

    if (getLocal) {
        for (let item of getLocal) {
            mydonate += item.price;
        }
        total = 350 - mydonate
    }

    const data1 = [
      { name: "Total Donation", value: total },
      { name: "Your Donation", value: mydonate },
    ];
    
    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

   
  return (
    <div>
      <div className="w-full flex justify-center ">
        <PieChart width={400} height={400}>
          <Pie
            data={data1}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            isAnimationActive={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className=" w-[30%] mx-auto lg:flex gap-10">
        <div className="flex items-center gap-2  mb-10">
          <h2 className="text-lg font-bold">Your Donation</h2>{" "}
          <div className="w-[100px] h-[12px] bg-[#00C49F] rounded-sm"></div>
        </div>
        <div className="flex items-center gap-2  mb-10">
          <h2 className="text-lg font-bold">Total Donation</h2>{" "}
          <div className="w-[100px] h-[12px] bg-[#FF444A] rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
