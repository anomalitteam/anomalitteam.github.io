import { Zap } from "lucide-react";

export function Badge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-ez/10 px-2.5 py-0.5 text-xs font-semibold text-ez-text">
      <Zap className="h-3 w-3 fill-ez-text text-ez-text" />
      EZ
    </span>
  );
}
