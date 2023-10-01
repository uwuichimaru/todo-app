import { useState, useEffect } from "react";
import { Burger } from "../../components/burger-menu/index";
import { Sidebar } from "../../components/side-bar/index";
import { Header } from "../../components/header/index";
import { useNavigate } from "react-router";
import { ListName } from "../../components/list-name";
import tasks from "../../assets/images/tasksBlue.svg";
import { AddTask } from "../../components/add-task";
import { TaskList } from "../../components/task-list";
export const Tasks = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/login");
  }, [token, navigate]);
  return (
    <div>
      <Header />
      <div className="flex bg-[#11100F] h-[100vh] overflow-y-hidden">
        <div>
          {token ? (
            <div>
              <Burger toggler={toggleSidebar} />
              {sidebar ? <Sidebar /> : ""}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="flex flex-col w-[95%] ml-9 mt-3">
          <ListName image={tasks} text="Tasks" classes={"text-[#78BAFD]"} classa="mb-4" />
          <AddTask />
          <TaskList/>
        </div>
      </div>
    </div>
  );
};
