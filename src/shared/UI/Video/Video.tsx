import React, { CSSProperties, FC } from 'react';

type VideoProps = JSX.IntrinsicElements["video"]  

interface IVideo extends VideoProps{
    styles? : CSSProperties,
    className? : string,
    videoName : string,
    darkOpacity? : number,
    videoClassName? : string,
    type?: string,
    muted? : boolean
} 

const Video:FC<IVideo & VideoProps> = ({className = "" , videoClassName = "" ,styles = {}, videoName, darkOpacity = 0, muted = true, type = "video/mp4", ...props}) => {
    return (
        <div className={`relative ${className}`}>
            <div 
              className="w-full h-full absolute bg-black" 
              style={{ opacity: darkOpacity }}
            />
            <video 
              className={`w-full h-full object-cover ${videoClassName}`} 
              style={styles} 
              muted={muted} 
              {...props} 
              playsInline 
            >
                <source type={type} src={`/videos/${videoName}`} />
            </video>
        </div>
    );
};

export default React.memo(Video);
