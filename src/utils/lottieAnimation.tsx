import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: any;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        animationData: animationData,
        renderer: "svg", 
        loop: true,
        autoplay: true,
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy(); // Clean up the animation when the component unmounts
      }
    };
  }, [animationData]);

  return <div ref={containerRef} />;
};

export default LottieAnimation;