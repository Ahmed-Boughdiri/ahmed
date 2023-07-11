"use client"
import styles from "../styles/Home.module.css";
import { 
  Navbar, 
  Window,
  MenuBar,
  Desktop
} from "../components";
import { useState } from "react";
import { WindowProps } from "../types";
 
export default function Home() {
  const [windowsData, setWindowsData] = useState<WindowProps[]>([]);
  const createNewWindow = (newWindow: WindowProps) => 
    setWindowsData(prevState =>[...prevState, newWindow]);
  return (
    <div className={styles.container}>
      <Navbar createNewWindow={createNewWindow} />
      <MenuBar />
      <Desktop createNewWindow={createNewWindow} />
      {
        windowsData.map((window, index) =>(
          <Window 
            key={index}
            height={window.height ? window.height : 500}
            width={window.width ? window.width : 700}
            title={window.title}
            name={window.name}
            content={window.content}
          />
        ))
      }
    </div>
  );
}
