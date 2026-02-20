import React, { CSSProperties, FC } from 'react';
import cl from "./_Video.module.scss"
import { getCdnUrl } from '@/shared/utils/createImgPath'


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
        <div className={`${cl.videoWrapper} ${className}`}>
            <div className={cl.darkBlock} style={{
                opacity : darkOpacity
            }}>
            </div>
            <video className={`${cl.video} ${videoClassName}`}  style={styles} muted={muted} {...props} playsInline >
                <source type={type} src={getCdnUrl(`/videos/${videoName}`)}  />
            </video>
        </div>
    );
};

export default React.memo(Video);
