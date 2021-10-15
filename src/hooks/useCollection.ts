import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/fireStore";

export default function useCollection(collection: string) {
  const [data, setData] = useState(Array<any>());

  const fetchData = useCallback(async (path) => {
    try {
      const data = await getCollection(path);
      setData(data);
    } catch {}
  }, []);

  useEffect(() => {
    fetchData(collection);
  }, [fetchData, collection]);

  return { data };
}
