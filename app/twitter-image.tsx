import { generateSocialImage } from "@/lib/seo/social-image";
import { socialImageAlt } from "@/lib/seo/site";

export const alt = socialImageAlt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return generateSocialImage();
}
