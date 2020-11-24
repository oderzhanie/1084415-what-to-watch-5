import React, {PureComponent, Fragment, createRef} from "react";
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

  render() {
    const {movieId, moviePreviewImg, moviePreviewLink, isPlaying, onMouseOver} = this.props;

    return (
      <Fragment>
        <video
          src = {moviePreviewLink}
          autoPlay={isPlaying}
          ref={this.videoRef}
          id = {movieId}
          poster={moviePreviewImg}
          width="280"
          height="175"
          muted
          onMouseOver={onMouseOver}
        >
        </video>
      </Fragment>
    );
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}

VideoPlayer.propTypes = {
  moviePreviewLink: PropTypes.string.isRequired,
  moviePreviewImg: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func
};
