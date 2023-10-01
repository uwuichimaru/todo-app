import { useState } from "react"
import { Header } from "../../components/header"
import { Sidebar } from "../../components/side-bar"
import { Burger } from "../../components/burger-menu";

export const Home = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebarHandler = () => {
        return setSidebar(!sidebar);
    }
    return (
        <div>
            <Header />
            <Burger toggler={toggleSidebarHandler}/>
            {sidebar ? <Sidebar/> : ''}
        </div>
    )
}