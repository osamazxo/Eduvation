import "@vidstack/react/player/styles/base.css";

import { useEffect, useRef } from "react";

import styles from "./player.module.css";

import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  Poster,
  Track,
} from "@vidstack/react";

import { VideoLayout } from "./components/layouts/video-layout.tsx";

export default function VideoPlayer({ src, textTracks }) {
  let player = useRef(null);

  useEffect(() => {
    // Subscribe to state updates.
    return player.current?.subscribe(({ paused, viewType }) => {
      // console.log('is paused?', '->', state.paused);
      // console.log('is audio view?', '->', state.viewType === 'audio');
    });
  }, []);

  function onProviderChange(provider, nativeEvent) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  // We can listen for the `can-play` event to be notified when the player is ready.
  function onCanPlay(detail, nativeEvent) {
    // ...
  }

  return (
    <MediaPlayer
      className={`${styles.player} player`}
      title="Sprite Fight"
      src={src}
      crossorigin
      playsinline
      onProviderChange={onProviderChange}
      onCanPlay={onCanPlay}
      ref={player}
    >
      <MediaProvider>
        <Poster
          class={styles.poster}
          src="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=1200"
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        />
        {textTracks?.map((track) => (
          <Track {...track} key={track.src} />
        ))}
      </MediaProvider>

      <VideoLayout thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt" />
    </MediaPlayer>
  );
}
