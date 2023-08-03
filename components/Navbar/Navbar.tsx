import Image from "next/image";
import { useState } from "react";
import { WindowProps } from "../../types";

import chromeIcon from "../../assets/icons/chrome.png";
import folderIcon from "../../assets/icons/folder.png";
import videoIcon from "../../assets/icons/video.png";
import appsIcon from "../../assets/icons/apps.png";

interface NavbarProps {
    createNewWindow: (window: WindowProps) => void
}

export const Navbar:React.FC<NavbarProps> = ({ createNewWindow }) => {
    const [showBrowserLabel, setShowBrowserLabel] = useState(false);
    const [showFoldersLabel, setShowFoldersLabel] = useState(false);
    const [showVideoLabel, setShowVideoLabel] = useState(false);
    const [showAppsLabel, setShowAppsLabel] = useState(false);

    return (
        <div className="h-fit w-fit fixed z-40 left-[50%] translate-x-[-50%] md:bottom-7 bottom-5 flex items-center gap-5">
            <div 
                className="h-16 w-16 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onMouseEnter={() => setShowBrowserLabel(true)}    
                onMouseLeave={() => setShowBrowserLabel(false)}
                onClick={() => createNewWindow({ 
                    name: "Browser", 
                    title: "About Me",
                    content: "Browser"
                })}
            >
                <Image 
                    src={chromeIcon}
                    height={32}
                    width={32}
                    alt="chrome icon"
                />
                {
                    showBrowserLabel && (
                        <h6 className="text-center text-xs font-medium text-[#595D60] bg-white bg-opacity-60 rounded-md px-3.5 py-1.5 absolute bottom-16 -translate-y-2">
                            Browser
                        </h6>
                    )
                }
            </div>
            <div 
                className="h-16 w-16 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onMouseEnter={() => setShowFoldersLabel(true)}    
                onMouseLeave={() => setShowFoldersLabel(false)}    
                onClick={() => createNewWindow({ 
                    name: "Folders", 
                    title: "Certifications",
                    content: "Certifications"
                })}
            >
                <Image 
                    src={folderIcon}
                    height={32}
                    width={32}
                    alt="folder icon"
                />
                {
                    showFoldersLabel && (
                        <h6 className="text-center text-xs font-medium text-[#595D60] bg-white bg-opacity-60 rounded-md px-3.5 py-1.5 absolute bottom-16 -translate-y-2">
                            Folders
                        </h6>
                    )
                }
            </div>
            <div 
                className="h-16 w-16 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onMouseEnter={() => setShowAppsLabel(true)}    
                onMouseLeave={() => setShowAppsLabel(false)}    
                onClick={() => createNewWindow({ 
                    name: "Apps", 
                    title: "Previous Projects",
                    height: window.innerHeight - 140,
                    width: window.innerWidth - 50,
                    content: "Portfolio"
                })}
            >
                <Image 
                    src={appsIcon}
                    height={32}
                    width={32}
                    alt="apps icon"
                    className="translate-x-1"
                />
                {
                    showAppsLabel && (
                        <h6 className="text-center text-xs font-medium text-[#595D60] bg-white bg-opacity-60 rounded-md px-3.5 py-1.5 absolute bottom-16 -translate-y-2">
                            Apps
                        </h6>
                    )
                }
            </div>
            <div 
                className="h-16 w-16 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onMouseEnter={() => setShowVideoLabel(true)}    
                onMouseLeave={() => setShowVideoLabel(false)}  
                onClick={() => createNewWindow({ 
                    name: "Video", 
                    title: "Introducing Myself",
                    content: "Video"
                })}  
            >
                <Image 
                    src={videoIcon}
                    height={32}
                    width={32}
                    alt="video icon"
                />
                {
                    showVideoLabel && (
                        <h6 className="text-center text-xs font-medium text-[#595D60] bg-white bg-opacity-60 rounded-md px-3.5 py-1.5 absolute bottom-16 -translate-y-2">
                            Video
                        </h6>
                    )
                }
            </div>
        </div>
    );
}
