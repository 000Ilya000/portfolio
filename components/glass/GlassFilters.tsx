export function GlassFilters() {
  return (
    <svg
      className="pointer-events-none absolute h-0 w-0"
      aria-hidden="true"
      focusable="false"
    >
      <filter
        id="liquid-refraction"
        x="-30%"
        y="-30%"
        width="160%"
        height="160%"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.008 0.014"
          numOctaves="3"
          seed="6"
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation="0.7" result="softNoise" />
        <feColorMatrix
          in="softNoise"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 0.85 0"
          result="tintedNoise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="tintedNoise"
          scale="18"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
