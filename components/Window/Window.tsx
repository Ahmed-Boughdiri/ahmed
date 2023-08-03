"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Layout from "../../layout";

import closeIcon from "../../assets/icons/close.png";
import minimizeIcon from "../../assets/icons/minimize.png";
import minusIcon from "../../assets/icons/minus.png";
import closeWhiteIcon from "../../assets/icons/close-white.png";
import transparentImage from "../../assets/pictures/transparent.png";

interface WindowProps {
    height?: String | Number,
    width?: String | Number,
    title: String,
    name: String,
    content?: String
}

export const Window:React.FC<WindowProps> = ({
    height,
    width,
    title,
    name,
    content
}) =>{
    const [windowVisible, setWindowVisible] = useState(true);
    
    // Handle Dragging
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ 
        x: 0, 
        y: 0 
    });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        const img:any = document.createElement('img');
        img.src = transparentImage;
        e.dataTransfer.setDragImage(img, 0, 0);
        e.dataTransfer.setData('text/plain', '');
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };
    
    const handleDrag = (e: React.DragEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    };
    
    const handleDragEnd = (e:React.DragEvent) => {
        setIsDragging(false);
        setPosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        });
    };

    // Toggle between dfault and white close icon when hover
    const [closeButtonHover, setCloseButtonHover] = useState(false);

    const [windowHeight, setWindowHeight] = useState<Number|String>(height ? height : 112);
    const [windowWidth, setWindowWidth] = useState<Number|String>(width ? width : 300);
    const [windowAlreadyExpanded, setWindowAlreadyExpanded] = useState(false);

    const handleExpandCurrentWindow = () => {
        if(!windowAlreadyExpanded) {
            setWindowHeight(window.innerHeight - 130);
            setWindowWidth(window.innerWidth - 50);
            setWindowAlreadyExpanded(true);
        } else {
            setWindowHeight(height ? height : 112);
            setWindowWidth(width ? width : 300);
            setWindowAlreadyExpanded(false);
        }
    }
    return ( 
        <>
            {
                windowVisible && (
                    <div 
                        className={`md:min-w-[300px]  bg-[#EFF3F6] shadow-lg fixed w-[95vw] ${windowAlreadyExpanded ? "md:rounded-none" : "md:rounded-md"}  z-50`}
                        style={{
                            height: (window.innerWidth > 800) ? windowHeight as string : window.innerHeight - 100,
                            width: (window.innerWidth > 800) ? windowWidth as string : window.innerWidth,
                            transform: `translate(${position.x}px, ${position.y}px)`,
                        }}
                        draggable
                        onDragStart={handleDragStart}
                        onDrag={handleDrag}
                        onDragEnd={handleDragEnd}
                    >
                        {/* Top Window */}
                        <div 
                            className="h-11 w-full bg-[#EFF3F6] rounded-tl-md rounded-tr-md flex items-center"
                            
                        >
                            {/* Top Bar Name - Window Title */}
                            <div className="h-full flex flex-col justify-center px-6 pt-7">
                                <h6 className="text-xs text-[#595D60] font-medium">
                                    { name }
                                </h6>
                                <h6 className="text-md font-bold">
                                    { title }
                                </h6>
                            </div>
                            {/* Top Bar Option (Maximize - Minimize - Close) */}
                            <div className="w-fit h-full ml-auto flex items-center">
                                <div 
                                    className="h-full w-fit px-3 pt-2 py-1 flex items-center justify-center cursor-pointer hover:bg-[#cecece]"
                                    onClick={() => setWindowVisible(false)}    
                                >
                                    <Image 
                                        src={minusIcon}
                                        height={20}
                                        width={20}
                                        alt="minus icon"
                                    />
                                </div>
                                <div 
                                    className="h-full w-fit px-3 pt-2 py-1 flex items-center justify-center cursor-pointer hover:bg-[#cecece]"
                                    onClick={handleExpandCurrentWindow}    
                                >
                                    <Image 
                                        src={minimizeIcon}
                                        height={15}
                                        width={15}
                                        alt="minimize icon"
                                    />
                                </div>
                                <div 
                                    className={`h-full w-fit px-3 pt-2 py-1 flex items-center justify-center ${windowAlreadyExpanded ? "rounded-tr-none" : "rounded-tr-md"} cursor-pointer hover:bg-[#FF0000]`}
                                    onClick={() => setWindowVisible(false)}  
                                    onMouseEnter={() => setCloseButtonHover(true)}  
                                    onMouseLeave={() => setCloseButtonHover(false)}
                                >
                                    <Image 
                                        src={closeButtonHover ? closeWhiteIcon : closeIcon}
                                        height={19}
                                        width={19}
                                        alt="close icon"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Main Window */}
                        <div 
                            className="h-16 w-full"
                            style={{
                                height: (typeof height === "string") ? `calc(${height} - 44px)` : `calc(${height}px - 44px)`
                            }}    
                        >
                            <div className="w-[98%] h-[91%] mx-auto mt-6 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-[#6B6F72] scrollbar-track-transparent scrollbar-track-rounded-full">
                                <Layout 
                                    name={content || ""} 
                                    windowAlreadyExpanded={windowAlreadyExpanded}    
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
