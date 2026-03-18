// Here will create our SkeletonCard means "shimmer effect" shows when data is loading.

import { Skeleton } from "@mui/material";

export default function SkeletonCardMovieDetails() {
  return (
    <div className="flex w-full gap-10">
      
      {/* LEFT */}
      <div className="flex flex-col gap-4">
        <Skeleton
          variant="rectangular"
          width={260}
          height={400}
          sx={{ bgcolor: "grey.800" }}
        />

        <Skeleton
          variant="rectangular"
          width={260}
          height={50}
          sx={{ bgcolor: "grey.700" }}
        />
      </div>

      {/* RIGHT */}
      <div className="flex-1">
        <Skeleton
          variant="rectangular"
          width={800}
          height={400}
          sx={{ bgcolor: "grey.800" }}
        />
      </div>

    </div>
  );
}