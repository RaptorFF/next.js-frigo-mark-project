"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DRAG_SENSITIVITY = 1.35;
const WHEEL_SENSITIVITY = 1.4;

export function useInfiniteMarquee({ desktopDuration, mobileDuration }) {
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimestampRef = useRef(0);
  const sequenceWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startOffset: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const normalizeOffset = useCallback((offset) => {
    const sequenceWidth = sequenceWidthRef.current;
    if (!sequenceWidth) return 0;

    return ((offset % sequenceWidth) + sequenceWidth) % sequenceWidth;
  }, []);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  }, []);

  const measureTrack = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    sequenceWidthRef.current = track.scrollWidth / 2;
    offsetRef.current = normalizeOffset(offsetRef.current);
    applyTransform();
  }, [applyTransform, normalizeOffset]);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!dragStateRef.current.isDragging && sequenceWidthRef.current) {
        const animationDuration =
          window.innerWidth <= 640 ? mobileDuration : desktopDuration;
        const pixelsPerMs = sequenceWidthRef.current / animationDuration;
        offsetRef.current = normalizeOffset(
          offsetRef.current + deltaTime * pixelsPerMs,
        );
        applyTransform();
      }

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    measureTrack();
    animationFrameRef.current = window.requestAnimationFrame(animate);
    window.addEventListener("resize", measureTrack);

    return () => {
      window.removeEventListener("resize", measureTrack);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    applyTransform,
    desktopDuration,
    measureTrack,
    mobileDuration,
    normalizeOffset,
  ]);

  const handlePointerDown = useCallback((e) => {
    const track = trackRef.current;
    if (!track) return;

    dragStateRef.current = {
      isDragging: true,
      startX: e.clientX,
      startOffset: offsetRef.current,
    };

    setIsDragging(true);
    track.setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      const dragState = dragStateRef.current;
      if (!dragState.isDragging) return;

      e.preventDefault();
      const deltaX = (e.clientX - dragState.startX) * DRAG_SENSITIVITY;
      offsetRef.current = normalizeOffset(dragState.startOffset - deltaX);
      applyTransform();
    },
    [applyTransform, normalizeOffset],
  );

  const handleWheel = useCallback(
    (e) => {
      const scrollDelta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (!scrollDelta) return;

      e.preventDefault();
      offsetRef.current = normalizeOffset(
        offsetRef.current + scrollDelta * WHEEL_SENSITIVITY,
      );
      applyTransform();
      lastTimestampRef.current = 0;
    },
    [applyTransform, normalizeOffset],
  );

  const stopDragging = useCallback((e) => {
    dragStateRef.current.isDragging = false;
    setIsDragging(false);
    lastTimestampRef.current = 0;
    e?.currentTarget?.releasePointerCapture?.(e.pointerId);
  }, []);

  return {
    isDragging,
    trackRef,
    marqueeHandlers: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: stopDragging,
      onPointerCancel: stopDragging,
      onPointerLeave: stopDragging,
      onWheel: handleWheel,
    },
  };
}
