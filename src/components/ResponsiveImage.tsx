import React from "react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  lazy?: boolean;
}

/**
 * ResponsiveImage Component
 * Handles WebP fallback support and responsive image loading
 *
 * Usage:
 * <ResponsiveImage
 *   src="image.png"
 *   alt="Description"
 *   width={500}
 *   height={400}
 *   priority
 * />
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  lazy = false,
}) => {
  // Generate WebP source from PNG/JPG source
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  const imageProps = {
    src,
    alt,
    className,
    ...(width && { width }),
    ...(height && { height }),
    ...(priority && { fetchPriority: "high" as const }),
    ...(lazy && { loading: "lazy" as const }),
  };

  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      {/* Fallback to original format */}
      <source srcSet={src} />
      {/* Fallback img tag for older browsers */}
      <img {...imageProps} />
    </picture>
  );
};
