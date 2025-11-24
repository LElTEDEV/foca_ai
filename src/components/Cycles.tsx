const colorWorkType = {
  workTime: "bg-warning",
  shortBreakTime: "bg-primary",
  longBreakTime: "bg-info",
};

export function Cycles() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <span>Ciclos:</span>

      <div className="flex items-center gap-2">
        <span
          className={`w-8 h-8 rounded-full ${colorWorkType["workTime"]}`}
        ></span>
        <span
          className={`w-8 h-8 rounded-full ${colorWorkType["shortBreakTime"]}`}
        ></span>
        <span
          className={`w-8 h-8 rounded-full ${colorWorkType["longBreakTime"]}`}
        ></span>
      </div>
    </div>
  );
}
