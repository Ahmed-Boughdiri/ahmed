import Image from "next/image";
import { WindowProps } from "../../types";

import messagesIcon from "../../assets/icons/messages.png";
import compassIcon from "../../assets/icons/compass.png";
import starIcon from "../../assets/icons/star.png";

interface DesktopProps {
    createNewWindow: (window: WindowProps) => void
}

export const Desktop:React.FC<DesktopProps> = ({ createNewWindow }) => (
    <div className="w-full h-[600px] fixed md:top-8 top-16 md:left-0 left-[-15px] z-10 px-3">
        <div 
            className="h-28 w-28 flex items-center justify-center flex-col gap-1.5 rounded-md bg-black bg-opacity-0 hover:bg-opacity-40 cursor-pointer mb-2 mr-3"
            onDoubleClick={() => createNewWindow({ 
                name: "About Me", 
                title: "Let Me Introduce Myself",
                content: "About Me",
                width: 1000
            })}    
        >
            <Image 
                src={starIcon}
                height={63}
                width={63}
                alt="favourite icon"
                draggable={false}
            />
            <h6 className="text-center text-white md:text-xs text-sm font-medium md:shadow-md">
                About Me
            </h6>
        </div>
        <div 
            className="h-28 w-28 flex items-center justify-center flex-col gap-1.5 rounded-md bg-black bg-opacity-0 hover:bg-opacity-40 cursor-pointer mb-2 mr-3"
            onDoubleClick={() => createNewWindow({ 
                name: "Portfolio", 
                title: "Some of My Previos Projects",
                height: window.innerHeight - 140,
                width: window.innerWidth - 50,
                content: "Portfolio"
            })}     
        >
            <Image 
                src={compassIcon}
                height={63}
                width={63}
                alt="compass icon"
                draggable={false}
            />
            <h6 className="text-center text-white md:text-xs text-sm font-medium md:shadow-md">
                PORTFOLIO
            </h6>
        </div>
        <div 
            className="h-28 w-28 flex items-center justify-center flex-col gap-1.5 rounded-md bg-black bg-opacity-0 hover:bg-opacity-40 cursor-pointer mb-2 mr-3"
            onDoubleClick={() => createNewWindow({ 
                name: "Contact", 
                title: "My Contact Details",
                content: "Contact Details"
            })}     
        >
            <Image 
                src={messagesIcon}
                height={63}
                width={63}
                alt="messages icon"
                draggable={false}
            />
            <h6 className="text-center text-white md:text-xs text-sm font-medium md:shadow-md">
                CONTACT
            </h6>
        </div>
    </div>
)
