import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/fireStore";

export default function useCollection(collection: string) {
  const [status, setStatus] = useState(0);
  const [data, setData] = useState(Array<any>());

  const fetchData = useCallback(async (path) => {
    try {
      const data = await getCollection(path);
      setData(data);
      setStatus(1);
    } catch {
    } finally {
      setStatus(2);
    }
  }, []);

  useEffect(() => {
    fetchData(collection);
  }, [fetchData, collection]);

  return { data, status };
}
