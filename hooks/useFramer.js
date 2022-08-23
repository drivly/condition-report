import { useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const useFramer = (animation) => {
  const ctrls = useAnimation();
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (inView) ctrls.start("visible");
    if (!inView) ctrls.start("hidden");
  }, [ctrls, inView]);

  return [setRefs, ctrls, animation];
};

export default useFramer;
