import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconArrowBackUp,
  IconArrowBarRight,
  IconArrowBarToRight,
  IconChevronRightPipe,
  IconCopyX,
  IconX,
} from "@tabler/icons-react";
import styles from "./SideRail.module.scss";
import useShelfBuilder from "@/hooks/useShelfBuilder";
import { MdOutlineKeyboardTab } from "react-icons/md";
import Button from "../Button";

export default function SideRail({
  children,
  remove,
  collapse,
}: {
  children: ReactNode;
  remove: () => void;
  collapse: () => void;
}) {
  const { editFlower } = useShelfBuilder();

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
            <div className="h-full">
              <div className="p-4 flex flex-row justify-between">
                <button type="button" onClick={collapse}>
                  <IconArrowBarToRight
                    className="stroke-secondary"
                    size={24}
                    stroke={1.5}
                  />
                </button>
                <button
                  type="button"
                  className="btn btn-warning btn-xs  btn-ghost text-warning"
                  onClick={remove}
                >
                  <IconCopyX size={24} stroke={1.5} /> Remove Flower
                </button>
              </div>

              <hr className="h-px  bg-secondary border-0" />

              <div className="p-4">{children}</div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
