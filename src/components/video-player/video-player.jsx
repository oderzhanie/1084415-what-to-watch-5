import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = createRef();
  }

  componentDidMount() {
    const {moviePreviewLink} = this.props;
    const video = this.videoRef.current;

    video.src = moviePreviewLink;
  }

  componentWillUnmount() {
    const video = this.videoRef.current;
    video.oncanplaythrough = null;
  }

  componentDidUpdate() {
    const video = this.videoRef.current;
    const {moviePreviewLink} = this.props;

    if (this.props.isPlaying) {
      video.src = moviePreviewLink;
      setTimeout(() => video.play(), 1000);
    } else {
      video.pause();
      video.src = ``;
    }
  }

  render() {
    const {moviePreviewImg, moviePreviewLink, onMouseOver, onMouseOut} = this.props;

    return (
      <video
        src = {moviePreviewLink}
        ref={this.videoRef}
        poster={moviePreviewImg}
        width="280"
        height="175"
        muted
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  moviePreviewLink: PropTypes.string.isRequired,
  moviePreviewImg: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func
};
