import { tasksType } from "../TodoListApp";
import { CreateUniqKey } from "../helpers/functions";

type buttonTaskType = {
  setTasks: (a: tasksType[]) => void;
  tasks: tasksType[];
  inputTask: string;
  setInputTask: (a: string) => void;
};

const AddButton = (props: buttonTaskType) => {
  const { inputTask, setInputTask, setTasks, tasks } = props;

  const addTask = () => {
    if (inputTask.trim() !== "") {
      const newTask = [
        {
          id: CreateUniqKey(),
          value: inputTask,
          check: false,
        },
      ];
      setTasks([...tasks, ...newTask]);
      setInputTask("");
    } else alert("Lütfen görev yazınız...");
  };

  return (
    <button
      onClick={() => addTask()}
      className="w-[30%] h-10 bg-gradient-to-l from-indigo-700 to-purple-600 opacity-90 hover:opacity-100 rounded-[20px] shadow justify-center items-center flex mt-[12px]"
    >
      <div
        style={{ fontFamily: "Akaya Kanadaka" }}
        className="flex text-center text-white text-[24px] font-normal"
      >
        Ekle
      </div>
    </button>
  );
};

export default AddButton;
