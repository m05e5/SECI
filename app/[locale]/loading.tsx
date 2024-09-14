import { Skeleton } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div>
        <Skeleton
          variant="rectangular"
          sx={{ height: "500px", width: "100%" }}
          animation="wave"
        />
      <div className="flex flex-col w-full gap-3 p-3">
        <Skeleton
          variant="rectangular"
          sx={{ height: "50px", width: "100%" }}
        />
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="text" animation="wave" />
      </div>
    </div>
  );
}
