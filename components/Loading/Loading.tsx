import Image from "next/image";

import loadingGIF from "../../assets/loading.gif";

export const Loading = () =>(
    <div className="h-screen w-screen flex items-center justify-center bg-[#f3f3f3] fixed top-0 left-0 z-50">
        <Image 
            src={loadingGIF}
            alt="Loading Animation"
            height={800}
            width={1000}
        />
    </div>
)
