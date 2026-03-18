import { Skeleton } from "@mui/material";

export default function SkeletonCardHomePage() {
  return (
    <div className="p-4 flex gap-6">
      {/* Poster */}
      <Skeleton
        variant="rectangular"
        width={300}
        height={450}
        animation="wave"
        sx={{ bgcolor: "grey.800" }}
      />

      {/* Info */}
      <div className="flex-1 space-y-4">
        <Skeleton width="60%" height={40} sx={{ bgcolor: "grey.800" }} />
        <Skeleton width="40%" sx={{ bgcolor: "grey.800" }} />
        <Skeleton width="80%" sx={{ bgcolor: "grey.800" }} />
        <Skeleton width="90%" sx={{ bgcolor: "grey.800" }} />
      </div>
    </div>
  );
}