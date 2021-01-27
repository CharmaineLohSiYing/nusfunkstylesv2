import LazyLoad from "react-lazyload";
    

export default function VideoMontage() {
    return (
        <LazyLoad>
            <video className="bg" src="/assets/community/photos/Community video.mp4" autoPlay loop muted playsInline/>
        </LazyLoad>
    )
}
