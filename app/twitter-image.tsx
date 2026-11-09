import { alt, contentType, generateSocialImage, size } from "@/lib/seo/social-image";

export { alt, contentType, size };

export default function TwitterImage() {
  return generateSocialImage();
}
