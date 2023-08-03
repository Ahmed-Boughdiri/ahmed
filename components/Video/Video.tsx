import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { useRef, useEffect } from "react";

export const VideoPlayer:React.FC<any> = (props) => {
    const videoRef = useRef<any>(null);
    const playerRef = useRef<any>(null);
    const {options, onReady} = props;

    useEffect(() => {

        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
          // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
          const videoElement = document.createElement("video-js");
    
          videoElement.classList.add('vjs-big-play-centered');
        videoRef.current.appendChild(videoElement);
    
          const player = playerRef.current = videojs(videoElement, options, () => {
            videojs.log('player is ready');
            onReady && onReady(player);
          });
    
        // You could update an existing player in the `else` block here
        // on prop change, for example:
        } else {
          const player = playerRef.current;
    
          player.autoplay(options.autoplay);
          player.src(options.sources);
        }
    }, [options, videoRef, onReady]);

    useEffect(() => {
        const player = playerRef.current;
    
        return () => {
          if (player && !player.isDisposed()) {
            player.dispose();
            playerRef.current = null;
          }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player>
            <div ref={videoRef} />
        </div>
    )
}

interface VideoProps {
    src: String
}

export const Video:React.FC<VideoProps> = ({ src }) =>{
    const playerRef = useRef<any>(null);
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: false,
        sources: [{
          src: src,
          type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player: any) => {
        playerRef.current = player;
    
        // You can handle player events here, for example:
        player.on('waiting', () => {
          videojs.log('player is waiting');
        });
    
        player.on('dispose', () => {
          videojs.log('player will dispose');
        });
    };

    return (
        <VideoPlayer 
            options={videoJsOptions} 
            onReady={handlePlayerReady} 
          
        />
    )
}
