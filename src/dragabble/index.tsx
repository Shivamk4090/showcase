import React, { useState } from "react";
import "./index.css";

export function TaskBoard() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "homework",
      status: "todo",
    },
    {
      id: 2,
      title: "sabzi",
      status: "inprogress",
    },
    {
      id: 3,
      title: "ppt",
      status: "done",
    },
    {
      id: 4,
      title: "ghar ka kaam",
      status: "todo",
    },
  ]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, key: number) => {
    e.dataTransfer.setData("key", key.toString());
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    const key = e.dataTransfer.getData("key");
    setData((prevData) =>
      prevData.map((t) => (t.id.toString() == key ? { ...t, status } : t))
    );
  };

  return (
    <div className="board">
      {["todo", "inprogress", "done"].map((status, index) => {
        return (
          <div
            className="phase"
            key={index}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleOnDrop(e, status)}
          >
            <center>
              <h1>{status.toUpperCase()}</h1>
            </center>

            {data
              .filter((t) => t.status == status)
              .map((task) => {
                return (
                  <div
                    draggable
                    className="task"
                    key={`key-${task.id}`}
                    onDragStart={(e) => handleDragStart(e, task.id)}
                  >
                    <center>
                      <p>{task.title.toUpperCase()}</p>
                    </center>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}
