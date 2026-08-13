const DISPLACEMENT_MAP =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="X" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#9a9a9a"/>
      <stop offset="0.5" stop-color="#808080"/>
      <stop offset="1" stop-color="#666666"/>
    </linearGradient>
    <linearGradient id="Y" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#9a9a9a"/>
      <stop offset="0.5" stop-color="#808080"/>
      <stop offset="1" stop-color="#666666"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="#808080"/>
  <rect width="400" height="400" fill="url(#X)" opacity="0.7"/>
  <rect width="400" height="400" fill="url(#Y)" style="mix-blend-mode:soft-light"/>
  <rect x="56" y="56" width="288" height="288" rx="72" ry="72" fill="#808080" filter="blur(32px)"/>
</svg>`);

export function GlassFilters() {
  return (
    <svg
      width={0}
      height={0}
      className="pointer-events-none absolute"
      aria-hidden="true"
      focusable="false"
    >
      <filter
        id="lg-filter"
        x="-8%"
        y="-8%"
        width="116%"
        height="116%"
        colorInterpolationFilters="sRGB"
      >
        <feImage
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          href={DISPLACEMENT_MAP}
          result="displacementMap"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="displacementMap"
          scale="36"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <filter
        id="lg-filter-soft"
        x="-8%"
        y="-8%"
        width="116%"
        height="116%"
        colorInterpolationFilters="sRGB"
      >
        <feImage
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          href={DISPLACEMENT_MAP}
          result="displacementMap"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="displacementMap"
          scale="18"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
