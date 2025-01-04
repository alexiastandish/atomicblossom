import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import styles from "./SideRail.module.scss";
import useShelfBuilder from "@/hooks/useShelfBuilder";

export default function SideRail({ children }: { children: ReactNode }) {
  const { editFlower, resetEditFlower } = useShelfBuilder();

  return (
    <div className="">
      <AnimatePresence>
        {editFlower && (
          <motion.aside
            className={`${styles.sideRail} bg-neutral shadow-lg`}
            initial={{ right: "-300px" }}
            animate={{
              right: 0,
            }}
            exit={{
              right: "-300px",
              transition: { duration: 0.3 },
            }}
          >
            <button onClick={resetEditFlower}>
              <IconX stroke={1.5} />
            </button>
            <div>{children}</div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
