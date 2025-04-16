import { useState } from "react";
import "./App.css";
import { Toast, StarRating, TaskBoard } from "./miniApp/";

enum APP_LIST {
  Toast = "Toast",
  Rating = "Rating",
  TaskBoard = "TaskBoard",
}

function App() {
  const [currentApp, setCurrentApp] = useState(APP_LIST.TaskBoard);

  const handleOnClick = (current: APP_LIST) => {
    setCurrentApp(current);
  };

  return (
    <>
      <div className="main">
        <div className="main-left">
          <button onClick={() => handleOnClick(APP_LIST.Toast)}>Toast</button>
          <button onClick={() => handleOnClick(APP_LIST.Rating)}>Rating</button>
          <button onClick={() => handleOnClick(APP_LIST.TaskBoard)}>
            Task Board
          </button>
        </div>
        <div className="main-right">
          {currentApp == APP_LIST.Toast && <Toast />}
          {currentApp == APP_LIST.Rating && <StarRating />}
          {currentApp == APP_LIST.TaskBoard && <TaskBoard />}
        </div>
      </div>
    </>
  );
}

export default App;
