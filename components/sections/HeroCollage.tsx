"use client";

import Image from "next/image";
import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { site } from "@/content/site";
import { type HeroPhoto } from "@/content/types";
import { cn } from "@/lib/cn";

const speeds = [-72, 58, -64, 70] as const;

export function HeroCollage() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photos = site.photos;

  return (
    <div className="hero-collage">
      {photos.map((photo, index) => (
        <ParallaxPhoto
          key={photo.id}
          photo={photo}
          index={index}
          speed={reduce ? 0 : speeds[index] ?? 12}
          scrollY={scrollY}
          priority={index < 2}
        />
      ))}
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
          sizes="(max-width: 768px) 70vw, (max-width: 1200px) 36vw, 420px"
          className="hero-collage__image"
          style={{ objectPosition: photo.objectPosition }}
        />
      </div>
    </m.figure>
  );
}
