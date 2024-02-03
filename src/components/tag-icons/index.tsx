import React, { ReactNode } from "react";
import classNames from "classnames";

interface ITagProps {
  label: string | ReactNode;
  bgColor?: string;
  color?: string;
  fontSize?: number;
  className?: string;
}

export const Tag = ({
  label,
  bgColor,
  color = "#fff",
  fontSize = 10,
  className,
}: ITagProps) => {
  return (
    <span
      className={classNames("flex items-center", className)}
      style={{
        backgroundColor: bgColor,
        color: color,
        fontSize: fontSize,
        padding: "1px 8px",
        borderRadius: 10,
        transform: "scale(0.9)",
      }}
    >
      {label}
    </span>
  );
};

export const Boost = () => {
  return (
    <Tag
      bgColor="#F36363"
      label={
        <>
          <img
            width={9}
            src="https://wen-protocal-app.4everland.store/rocket.png"
            alt=""
            className="mr-1"
          />{" "}
          Boost
        </>
      }
    />
  );
};

export const Bouns = () => {
  return (
    <Tag
      bgColor="#FFBD0A"
      label={
        <>
          <img
            width={7}
            src="https://wen-protocal-app.4everland.store/hot.png"
            alt=""
            className="mr-1"
          />{" "}
          Bouns
        </>
      }
    />
  );
};

export const Curve = () => {
  return (
    <Tag
      bgColor="#fff"
      color="#3B454E"
      label={
        <>
          <img
            width={11}
            src="https://wen-protocal-app.4everland.store/curve.png"
            alt=""
            className="mr-1"
          />{" "}
          Curve
        </>
      }
    />
  );
};

export const Uni = () => {
  return (
    <Tag
      bgColor="#fff"
      color="#3B454E"
      label={
        <>
          <img
            width={13}
            src="https://wen-protocal-app.4everland.store/uni.png"
            alt=""
            className="mr-1"
          />{" "}
          Uniswap
        </>
      }
    />
  );
};
