import { Cycles } from "./Cycles";
import { DefaultInput } from "./DefaultInput";
import { DefaultButton } from "./DefaultButton";

export function MainForm() {
  return (
    <form className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center">
        <DefaultInput
          taskTitle="Tarefa"
          type="text"
          id="task"
          required
          placeholder="Nome da tarefa"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Cycles />
      </div>

      <div className="flex flex-col items-center justify-center">
        <DefaultButton />
      </div>
    </form>
  );
}
