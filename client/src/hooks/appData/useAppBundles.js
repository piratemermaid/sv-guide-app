import axios from "axios";
import { useQuery } from "react-query";
import queryKeys from "../../constants/queryKeys";

export function useAppBundles() {
  const query = useQuery(queryKeys.app.upgrades, async () => {
    try {
      return await axios({
        method: "get",
        url: "/api/app/bundles"
      });
    } catch (err) {
      return [];
    }
  });

  return { ...query, data: query?.data?.data ?? [] };
}
