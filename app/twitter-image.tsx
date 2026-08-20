import { generateSocialImage } from "@/app/og/generate";

export { alt, contentType, size } from "@/app/og/generate";
export const dynamic = "force-static";

export default function TwitterImage() {
  return generateSocialImage();
}
