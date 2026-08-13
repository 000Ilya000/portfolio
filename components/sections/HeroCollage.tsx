"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { site } from "@/content/site";
import { type HeroPhoto } from "@/content/types";
import { cn } from "@/lib/cn";
import { useMediaQuery } from "@/lib/media";

const speeds = [-72, 58, -64, 70] as const;

const sliderOrder = ["closeup", "full", "city", "bar"] as const;

const mobilePosition: Record<string, string> = {
  closeup: "50% 10%",
  full: "50% 8%",
  city: "48% 42%",
  bar: "58% 26%",
};

export function HeroCollage() {
  const reduce = useReducedMotion();
  const desktop = useMediaQuery("(min-width: 1024px)");
  const { scrollY } = useScroll();
  const photos = site.photos;

  return (
    <>
      <HeroSlider photos={photos} />
      <div className="hero-collage">
        {photos.map((photo, index) => (
          <ParallaxPhoto
            key={photo.id}
            photo={photo}
            index={index}
            speed={reduce || !desktop ? 0 : speeds[index] ?? 12}
            scrollY={scrollY}
            priority={index < 2}
          />
        ))}
      </div>
    </>
  );
}

function HeroSlider({ photos }: { photos: HeroPhoto[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const slides = useMemo(() => {
    const byId = new Map(photos.map((photo) => [photo.id, photo]));
    const ordered = sliderOrder
      .map((id) => byId.get(id))
      .filter((photo): photo is HeroPhoto => Boolean(photo));
    return ordered.length > 0 ? ordered : photos;
  }, [photos]);

  useEffect(() => {
    const node = scroller.current;
    if (!node) {
      return;
    }

    const onScroll = () => {
      const items = [...node.children] as HTMLElement[];
      const center = node.scrollLeft + node.clientWidth / 2;
      let nearest = 0;
      let distance = Number.POSITIVE_INFINITY;
      items.forEach((slide, index) => {
        const mid = slide.offsetLeft + slide.offsetWidth / 2;
        const delta = Math.abs(mid - center);
        if (delta < distance) {
          distance = delta;
          nearest = index;
        }
      });
      setActive(nearest);
    };

    onScroll();
    node.addEventListener("scroll", onScroll, { passive: true });
    return () => node.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero-slider" aria-label="Фото">
      <div ref={scroller} className="hero-slider__track">
        {slides.map((photo, index) => (
          <figure key={photo.id} className="hero-slider__slide">
            <div className="hero-slider__frame">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="88vw"
                className="hero-slider__image"
                style={{ objectPosition: mobilePosition[photo.id] ?? photo.objectPosition }}
                priority={index === 0}
              />
            </div>
          </figure>
        ))}
      </div>
      <div className="hero-slider__dots" aria-hidden="true">
        {slides.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            className={cn("hero-slider__dot", active === index && "hero-slider__dot--active")}
            onClick={() => {
              const track = scroller.current;
              const slide = track?.children[index] as HTMLElement | undefined;
              if (!track || !slide) {
                return;
              }
              track.scrollTo({
                left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
                behavior: "smooth",
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ParallaxPhoto({
  photo,
  index,
  speed,
  scrollY,
  priority,
}: {
  photo: HeroPhoto;
  index: number;
  speed: number;
  scrollY: MotionValue<number>;
  priority: boolean;
}) {
  const y = useTransform(scrollY, [0, 620], [0, speed]);

  return (
    <m.figure
      className={cn("hero-collage__item", `hero-collage__item--${index + 1}`)}
      style={{ y }}
    >
      <div className="hero-collage__frame">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority={priority}
          sizes="(max-width: 1200px) 36vw, 420px"
          className="hero-collage__image"
          style={{ objectPosition: photo.objectPosition }}
        />
      </div>
    </m.figure>
  );
}
