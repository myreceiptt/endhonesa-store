import { client } from "@/consts/client";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { resolveAvatar } from "thirdweb/extensions/ens";

export function useGetEnsAvatar({
  ensName,
}: {
  ensName: string | undefined | null;
}) {
  return useQuery(
    queryOptions({
      queryKey: ["ensAvatar", ensName || "n/a"] as const,
      queryFn: async () => {
        if (!client) {
          throw new Error("This hooks require the client consts, OiOi.");
        }
        if (!ensName) return;
        return resolveAvatar({ client, name: ensName });
      },
      enabled: !!ensName,
    })
  );
}
