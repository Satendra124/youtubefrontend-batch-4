import HeaderComponent from "./HeaderComponent";
import "./VideoPage.css";
const VideoPage = () => {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <div className="main">
        <div className="videoWrapper">
          <iframe
            src="https://www.youtube.com/embed/Hy55Ij78amM?si=U3aB-mSFPb4Nhhc_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="iframe"
          ></iframe>
          <div className="title"> This is the title fo the page</div>
          <div className="channelWrapper">
            <div className="channel">
              <img
                src={
                  "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj"
                }
                className="channelImage"
              />
            </div>
            <div className="likesWrappper"></div>
          </div>
        </div>
        <div className="suggestions"></div>
      </div>
    </div>
  );
};

export default VideoPage;
