import axios from "axios";
import { useQuery } from "react-query";
import queryKeys from "../../constants/queryKeys";

export function useAppUpgrades() {
  const query = useQuery(queryKeys.app.upgrades, async () => {
    try {
      return await axios({
        method: "get",
        url: "/api/app/upgrades"
      });
    } catch (err) {
      return [];
    }
  });

  return { ...query, data: query?.data?.data ?? [] };
}
