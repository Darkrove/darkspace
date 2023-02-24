import React, { useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import styles from "../styles/Video.module.css";
import useVideoPlayer from "../lib/hooks/useVideoPlayer";

const VideoPlayer = (props) => {
  const { src, style } = props;
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <div className={styles.container}>
      <div className={styles.videowrapper}>
        <video
          loop
          src={src}
          ref={videoElement}
          className={styles.video}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className={styles.controls}>
          <div className={styles.actions}>
            <button className={styles.btn} onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <FaPlay className="text-white" />
              ) : (
                <FaPause className="text-white" />
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            className={styles.range}
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className={`${styles.velocity} p-1`}
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option className="bg-zinc-600" value="0.50">
              0.50x
            </option>
            <option className="bg-zinc-600" value="1">
              1x
            </option>
            <option className="bg-zinc-600" value="1.25">
              1.25x
            </option>
            <option className="bg-zinc-600" value="2">
              2x
            </option>
          </select>
          <button className={styles.mutebtn} onClick={toggleMute}>
            {!playerState.isMuted ? (
              <FaVolumeUp className="text-white" />
            ) : (
              <FaVolumeMute className="text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
