import { useEffect, useRef } from "react";
import styled from "styled-components";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import "animate.css";

const AnimatedDownArrow = ({ onClick }) => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const el = arrowRef.current;
    if (!el) return;

    el.classList.add("animate__animated");

    const interval = setInterval(() => {
      el.classList.remove("animate__bounce");
      void el.offsetWidth; // Forzar reflow
      el.classList.add("animate__bounce");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DownArrow
      ref={arrowRef}
      className="animate__animated animate__bounce"
      onClick={onClick}
    />
  );
};

export default AnimatedDownArrow;

const DownArrow = styled(ChevronDoubleDownIcon)`
  width: 75px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
display: none; }
`;
