"use client"
import styles from "../styles/Home.module.css";
import { 
  Navbar, 
  Window,
  MenuBar,
  Desktop,
  Loading
} from "../components";
import { useState, useEffect } from "react";
import { WindowProps } from "../types";
import Head from "next/head";

 
export default function Home() {
  const [windowsData, setWindowsData] = useState<WindowProps[]>([]);
  const createNewWindow = (newWindow: WindowProps) => 
    setWindowsData(prevState =>[...prevState, newWindow]);
  const [loading, setLoading] = useState(true);
  const handleLoading = () =>{
    setTimeout(() =>{
      setLoading(false);
    }, 1500);
  }

  useEffect(() =>{
    handleLoading();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      {
        loading && (
          <Loading />
        )
      }
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
