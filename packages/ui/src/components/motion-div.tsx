'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

type MotionDivProps = HTMLMotionProps<'div'>;

const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  },
);
MotionDiv.displayName = 'MotionDiv';

export { MotionDiv };
