import { useState, useEffect } from "react";
import { Burger } from "../../components/burger-menu/index";
import { Sidebar } from "../../components/side-bar/index";
import { Header } from "../../components/header/index";
import { useNavigate } from "react-router";
import { ListName } from "../../components/list-name";
import myday from "../../assets/images/sun.svg";
export const MyDay = () => {
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

        <ListName image={myday} text="My Day" classes={undefined}/>
      </div>
    </div>
  );
};
