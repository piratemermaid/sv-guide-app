import axios from "axios";
import { useQuery } from "react-query";
import queryKeys from "../../constants/queryKeys";

export function useCalendar() {
  const query = useQuery(queryKeys.app.calendar, async () => {
    try {
      return await axios({
        method: "get",
        url: "/api/app/calendar"
      });
    } catch (err) {
      return [];
    }
  });

  return { ...query, data: query?.data?.data ?? [] };
}
