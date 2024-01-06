import React, { useState } from "react";
export type inpuTaskType = {
  inputTask: string;
  setInputTask: (a: string) => void;
};

const TaskInput = (props: inpuTaskType) => {
  const { inputTask, setInputTask } = props;
  return (
    <>
      <input
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="Yeni görev ekleyin.."
        value={inputTask}
        style={{
          fontFamily: "Akaya Kanadaka",
          borderImage:
            " linear-gradient(45deg, #1d4ed8,#c026d3,#f59e0b,#10b981, #dc2626) 1",
        }}
        className="w-[90%] h-[43px] rounded-[10px] text-[22px] 2xl:text-[30px] xl:text-[26px] lg:text-[24px] md:text-[22px] sm:[20px] font-normal indent-2 bg-transparent border-4 opacity-70 focus:opacity-100 focus:outline-none"
      />
    </>
  );
};

export default TaskInput;
