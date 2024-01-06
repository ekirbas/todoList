import { ReactComponent as DeleteIcon } from "../img/deleteIcon.svg";
import { ReactComponent as Tick } from "../img/tick.svg";
import { tasksType } from "../TodoListApp";

type propsType = {
  id: string;
  value: string;
  check: boolean;
  index: number;
  setTasks: (a: tasksType[]) => void;
  tasks: tasksType[];
};

const colors: { border: string; text: string; stroke: string }[] = [
  {
    border: "border-blue-700",
    text: "text-blue-700",
    stroke: "stroke-blue-700",
  },
  {
    border: "border-amber-500",
    text: "text-amber-500",
    stroke: "stroke-amber-500",
  },
  {
    border: "border-red-600",
    text: "text-red-600",
    stroke: "stroke-red-600",
  },
  {
    border: "border-emerald-500",
    text: "text-emerald-500",
    stroke: "stroke-emerald-500",
  },
  {
    border: "border-sky-500",
    text: "text-sky-500",
    stroke: "stroke-sky-500",
  },
  {
    border: "border-yellow-400",
    text: "text-yellow-400",
    stroke: "stroke-yellow-400",
  },
  {
    border: "border-fuchsia-600",
    text: "text-fuchsia-600",
    stroke: "stroke-fuchsia-600",
  },
];
const Task = (props: propsType) => {
  const { id, value, check, index, setTasks, tasks } = props;

  const deleteTask = (id: string) => {
    const fillteredTasks = tasks.filter((v) => v.id !== id);
    setTasks(fillteredTasks);
  };
  const tickedTask = (id: string) => {
    const filteredTasks = tasks.filter((v) => {
      if (id === v.id) {
        v.check = !v.check;
        return true;
      } else return true;
    });
    setTasks(filteredTasks);
  };

  return (
    <div className="a w-full h-auto justify-start items-center gap-4 inline-flex">
      <div className="b relative w-[18px] h-[18px] justify-center items-center flex cursor-pointer">
        {check ? (
          <Tick
            onClick={() => tickedTask(id)}
            className={`absolute -top-2 -left-0.5 cursor-pointer ${
              colors[index % 7].stroke
            }`}
          />
        ) : (
          ""
        )}
        <div
          onClick={() => tickedTask(id)}
          className={`d w-[18px] h-[18px] rounded border-2 cursor-pointer ${
            colors[index % 7].border
          }`}
        />
      </div>
      <div
        style={{ fontFamily: "Akaya Kanadaka" }}
        onClick={() => tickedTask(id)}
        className={`e w-full ${colors[index % 7].text} ${
          check ? " line-through" : ""
        } text-[22px] 2xl:text-[30px] xl:text-[26px] lg:text-[24px] md:text-[22px] sm:text-[20px] font-normal cursor-pointer`}
      >
        {value}
      </div>
      <div className="f w-8 h-8 relative">
        <DeleteIcon
          onClick={() => deleteTask(id)}
          className={`cursor-pointer ${colors[index % 7].stroke}`}
        />
      </div>
    </div>
  );
};

export default Task;
