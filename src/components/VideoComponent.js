import { Link } from 'react-router-dom';
const VideoComponent = () => {
  return (
    <div className="video">
      <div className="thumbnail">
        <Link to={'/video'}>
          <img
            alt="thumbnail"
            src={
              "https://i.ytimg.com/vi/`Hy55Ij78amM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqIcu-Eej1ZcceapvJYaKVwSbCFQ"
            }
            className="thumbnailImage"
          />
        </Link>

      </div>
      <div className="titlewrapper">
        <div className="channelphoto">
          <img
            alt="channelImage"
            src={
              "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj"
            }
            className="channelImage"
          />
        </div>
        <div className="title">
          This is a video Title for my video in youtube
          <div className="channel">MrWhosTheBoss</div>
          <div className="views">1.7M Views . 18 Hours Ago</div>
        </div>
      </div>

    </div>
  );
};

export default VideoComponent;
