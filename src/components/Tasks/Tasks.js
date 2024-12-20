import React from "react";
import Column from "../Column/Column";
import { DragDropContext } from "@hello-pangea/dnd";
import "./tasks.css";

const Tasks = ({ tasks, setTasks }) => {
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const source = result.source;
    const destination = result.destination;

    if (source.droppableId === destination.droppableId) {
      const columnTasks = tasks.filter(
        (task) => task.type === source.droppableId
      );
      const [reorderedTask] = columnTasks.splice(source.index, 1);
      columnTasks.splice(destination.index, 0, reorderedTask);

      const updatedTasks = tasks.map((task) =>
        task.type === source.droppableId ? columnTasks.shift() : task
      );

      setTasks(updatedTasks);
    } else {
      const sourceTasks = tasks.filter(
        (task) => task.type === source.droppableId
      );
      const destinationTasks = tasks.filter(
        (task) => task.type === destination.droppableId
      );

      const [movedTask] = sourceTasks.splice(source.index, 1);
      movedTask.type = destination.droppableId;
      destinationTasks.splice(destination.index, 0, movedTask);

      const updatedTasks = tasks
        .filter(
          (task) =>
            task.type !== source.droppableId &&
            task.type !== destination.droppableId
        )
        .concat(sourceTasks, destinationTasks);

      setTasks(updatedTasks);
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="column-container">
        <Column title="To do" type="toDo" tasks={tasks} setTasks={setTasks} />
        <Column
          title="In progress"
          type="inProgress"
          tasks={tasks}
          setTasks={setTasks}
        />
        <Column
          title="Completed"
          type="done"
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </DragDropContext>
  );
};

export default Tasks;
