import { useEffect, useState } from "react";
import "./App.css";
import Task from "./component/Task";
import { CreateUniqKey } from "./helpers/functions";
import Header from "./component/Header";
import TaskInput from "./component/TaskInput";
import AddButton from "./component/AddButton";

export type tasksType = {
  id: string;
  value: string;
  check: boolean;
};
const TodoListApp = () => {
  const [tasks, setTasks] = useState<tasksType[]>([
    {
      id: CreateUniqKey(),
      value: "Kitap oku",
      check: false,
    },
    {
      id: CreateUniqKey(),
      value: "Avizeyi tamir et",
      check: true,
    },
    {
      id: CreateUniqKey(),
      value: "Çocukları okuldan al",
      check: false,
    },
    {
      id: CreateUniqKey(),
      value: "Kırtasiye alışverişi yap",
      check: false,
    },
  ]);
  const [inputTask, setInputTask] = useState<string>("");

  const [isSmall, setIsSmall] = useState<boolean>(window.innerWidth <= 767);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 767) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    });
  }, []);

  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="relative overflow-hidden"
    >
      <img
        className="w-full h-full right-0 top-0 absolute bg-cover"
        src={
          isSmall
            ? require("./img/backgroundImage_sm.jpg")
            : require("./img/backgroundImage.jpg")
        }
      />
      <div className="q w-[63%] sm:w-[63%] 2xl:w-[31%] xl:w-[31%] lg:w-[31%] md:w-[31%] h-[72%] inset-x-[55%] inset-y-[14%] left-[23%] sm:left-[23%] md:left-[55%] lg:left-[55%] xl:left-[55%] 2xl:left-[55%]  relative flex flex-col">
        <Header />
        <div className="p mt-[85px] w-full h-[64%] overflow-auto">
          {tasks.map((v, i) => (
            <Task
              index={i}
              id={v.id}
              value={v.value}
              check={v.check}
              setTasks={setTasks}
              tasks={tasks}
              key={v.id}
            />
          ))}
        </div>
        <div className="w-full h-auto absolute bottom-0 right-0 left-0 justify-center items-center flex flex-col">
          <TaskInput inputTask={inputTask} setInputTask={setInputTask} />
          <AddButton
            inputTask={inputTask}
            setInputTask={setInputTask}
            setTasks={setTasks}
            tasks={tasks}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoListApp;
