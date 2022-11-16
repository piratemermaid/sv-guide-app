import axios from "axios";
import { useQuery } from "react-query";
import queryKeys from "../../constants/queryKeys";

export function useFairItems() {
  const query = useQuery(queryKeys.app.fairItems, async () => {
    try {
      return await axios({
        method: "get",
        url: "/api/app/fair_items"
      });
    } catch (err) {
      return [];
    }
  });

  return { ...query, data: query?.data?.data ?? [] };
}
