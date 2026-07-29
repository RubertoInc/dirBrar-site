"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export const pointerOptions = {
  "Bic4Colour-pointer": {
    src: "/cursors/Bic4Colour-pointer.png",
    width: 69.6,
    height: 55.2,
    hotspotX: 5.76,
    hotspotY: 52.2,
  },
  "OrangePencil-pointer": {
    src: "/cursors/OrangePencil-pointer.png",
    width: 46,
    height: 46,
    hotspotX: 3.6,
    hotspotY: 43.8,
  },
  "OrangePencilEditorial-pointer": {
    src: "/cursors/OrangePencilEditorial-pointer.png",
    width: 46,
    height: 46,
    hotspotX: 3.48,
    hotspotY: 44.09,
  },
} as const;

export type PointerOption = keyof typeof pointerOptions;

export function CustomImagePointer({ option }: { option: PointerOption }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointer = pointerOptions[option];

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!cursor || !finePointer.matches) {
      return;
    }

    const root = document.documentElement;
    let pointerX = -100;
    let pointerY = -100;
    let animationFrame = 0;

    const renderPosition = () => {
      cursor.style.transform = `translate3d(${pointerX - pointer.hotspotX}px, ${pointerY - pointer.hotspotY}px, 0)`;
      animationFrame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.classList.add("is-visible");

      const target = event.target;
      const isInteractive =
        target instanceof Element &&
        Boolean(
          target.closest(
            'a, button, input, textarea, select, summary, label, [role="button"]',
          ),
        );

      cursor.classList.toggle("is-interactive", isInteractive);

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(renderPosition);
      }
    };

    const handlePointerDown = () => {
      cursor.classList.add("is-clicking");
    };

    const handlePointerUp = () => {
      cursor.classList.remove("is-clicking");
    };

    const hideCursor = () => {
      cursor.classList.remove("is-visible", "is-clicking");
    };

    root.classList.add("custom-image-pointer-enabled");
    document.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });
    document.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.addEventListener("pointercancel", handlePointerUp, {
      passive: true,
    });
    root.addEventListener("mouseleave", hideCursor);
    window.addEventListener("blur", hideCursor);

    return () => {
      root.classList.remove("custom-image-pointer-enabled");
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointercancel", handlePointerUp);
      root.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("blur", hideCursor);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [pointer.hotspotX, pointer.hotspotY]);

  return (
    <div
      ref={cursorRef}
      className="custom-image-pointer"
      style={
        {
          width: pointer.width,
          height: pointer.height,
          "--pointer-hotspot-x": `${pointer.hotspotX}px`,
          "--pointer-hotspot-y": `${pointer.hotspotY}px`,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <div className="custom-image-pointer__assembly">
        <Image
          src={pointer.src}
          alt=""
          width={pointer.width}
          height={pointer.height}
          sizes={`${pointer.width}px`}
          priority
          draggable={false}
          className="custom-image-pointer__image"
        />
      </div>
    </div>
  );
}
