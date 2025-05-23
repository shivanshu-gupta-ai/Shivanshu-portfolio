import React from "react";

const MetricsDisplay = () => {
  const metrics = [
    {
      value: "35%",
      description: "Faster ticket resolution with intelligent automation",
    },
    {
      value: "$1.2M",
      description: "Projected yearly savings through AI Automation",
    },
    {
      value: "70%",
      description: "Reduction in time spent managing customer queries",
    },
  ];

  return (
    <div className="w-full py-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-evenly">
          {metrics.map((metric, index) => (
            <div key={index} className="w-full sm:w-1/3 px-4 mb-6 md:mb-0 ">
              <div className="text-4xl font-bold text-cyan-500 3xl:text-5xl">
                {metric.value}
              </div>
              <div className="text-gray-200 mt-2 text-sm 3xl:text-md">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsDisplay;
