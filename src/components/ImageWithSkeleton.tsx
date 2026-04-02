import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

const ImageWithSkeleton = ({ 
  src, 
  alt, 
  className, 
  containerClassName,
  ...props 
}: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full bg-muted shadow-inner" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out",
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
