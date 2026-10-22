/** One step of the banner image chain. A second failure stays failed so the swap cannot loop. */
export function bannerImageFallback(src: string, codedImage: string): { src: string; failed: boolean } {
  if (codedImage && src !== codedImage) return { src: codedImage, failed: false };
  return { src, failed: true };
}
