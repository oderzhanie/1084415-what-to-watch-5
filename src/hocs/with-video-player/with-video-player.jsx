import React, {PureComponent, createRef} from 'react';
import VideoPlayer from "../../components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isCardActive: false
      };
    }

    render() {
      const {isCardActive} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, img) => (
          <VideoPlayer
            moviePreviewLink={src}
            moviePreviewImg={img}
            isPlaying={isCardActive}
            onMouseOver={() => this.setState({
              isCardActive: true
            })
            }
            onMouseOut={() => this.setState({
              isCardActive: false
            })
            }
          />
        )}
      />;
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
