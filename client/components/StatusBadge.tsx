import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { StatusIcon } from "@/constants";

const StatusBadge = ({ status }: { status: Status }) => {
  console.log("Status:", status);
  return (
    <div
    //   className={clsx("status-badge", {
    //     "bg-green-600": status === "scheduled",
    //     "bg-blue-600": status === "pending",
    //     "bg-red-600": status === "cancelled",
    //   })}
    >
        {status}
      <Image
        // src={StatusIcon[status]}
        src="/assets/icons/cancelled.svg"
        alt={status}
        height={24}
        width={24}
        className="h-fit w-3"
      />
    </div>
  );
};

export default StatusBadge;
