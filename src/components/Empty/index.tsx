import React, { ReactNode } from "react";

interface IProps {
  description?: string | ReactNode;
}

export default function Empty({ description = "No data available" }: IProps) {
  return (
    <div
      className="flex items-center justify-center py-4"
      style={{ width: "100%", color: "#9397A3" }}
    >
      <img
        src="https://wen-protocal-app.4everland.store/empty.png"
        alt="empty"
        width={27}
        style={{ marginRight: 16 }}
      />
      {description}
    </div>
  );
}
