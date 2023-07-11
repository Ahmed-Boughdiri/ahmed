"use client"
import Image from "next/image";
import { useState } from "react";

import wifiIcon from "../../assets/icons/wifi.png";
import volumeIcon from "../../assets/icons/volume.png";
import batteryIcon from "../../assets/icons/battery.png";

export const MenuBar = () => {
    const [showWifiStatus, setShowWifiStatus] = useState(false);
    const [showFullDate, setShowFullDate] = useState(false);
    const [showVolumeStatus, setShowVolumeStatus] = useState(false);
    const [showBatteryStatus, setShowBatteryStatus] = useState(false);
    return (
        <div className="h-7 w-fit bg-black bg-opacity-20 fixed top-2 right-2 z-50 rounded-sm">
            {/* Menu Bar Options */}
            <div className="h-full w-fit px-4 ml-auto flex items-center">
                <div 
                    className="h-full px-2.5 flex items-center justify-center cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-40"
                    onMouseEnter={() => setShowBatteryStatus(true)}    
                    onMouseLeave={() => setShowBatteryStatus(false)}
                >
                    <Image 
                        src={batteryIcon}
                        height={19}
                        width={19}
                        color="#fff"
                        alt="battery icon"
                    />
                    {
                        showBatteryStatus && (
                            <h6 className="text-center px-3 py-1 w-36 bg-black bg-opacity-20 rounded-sm text-white text-xs font-medium absolute top-8 z-50">
                                Battery: Charged!
                            </h6>
                        )
                    }
                </div>
                <div 
                    className="h-full px-2.5 flex items-center justify-center cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-40"
                    onMouseEnter={() => setShowVolumeStatus(true)}    
                    onMouseLeave={() => setShowVolumeStatus(false)}
                >
                    <Image 
                        src={volumeIcon}
                        height={21}
                        width={21}
                        color="#fff"
                        alt="volume icon"
                    />
                    {
                        showVolumeStatus && (
                            <h6 className="text-center px-3 py-1 bg-black bg-opacity-20 rounded-sm text-white text-xs font-medium absolute top-8 z-50">
                                Volume: { new AudioContext().destination.channelInterpretation }
                            </h6>
                        )
                    }
                </div>
                <div 
                    className="h-full px-2.5 flex items-center bg-black bg-opacity-0 justify-center cursor-pointer hover:bg-opacity-40"
                    onMouseEnter={() => setShowWifiStatus(true)}
                    onMouseLeave={() => setShowWifiStatus(false)}    
                >
                    <Image 
                        src={wifiIcon}
                        height={19}
                        width={19}
                        color="#fff"
                        alt="wifi icon"
                    />
                    {
                        showWifiStatus && (
                            <h6 className="text-center px-3 py-1 bg-black bg-opacity-20 rounded-sm text-white text-xs font-medium absolute top-8 z-50">
                                Status: {navigator.onLine ? "connected" : "No Internet"}
                            </h6>
                        )
                    }
                </div>
                <h6 
                    className="text-center text-xs font-medium text-white px-3 cursor-pointer h-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-40"
                    onMouseEnter={() => setShowFullDate(true)}    
                    onMouseLeave={() => setShowFullDate(false)}
                >
                    {
                        new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            hour: 'numeric',
                            minute: 'numeric'
                        })   
                    }
                </h6>
                {
                    showFullDate && (
                        <h6 className="text-center px-3 py-1 bg-black bg-opacity-20 rounded-sm text-white text-xs font-medium absolute top-8 right-2 z-50">
                            { 
                                new Date().toLocaleDateString("en-US", {
                                    weekday: "long",
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    timeZone: 'UTC'
                                }) 
                            }
                        </h6>
                    )
                }
            </div>
        </div>
    );
}
