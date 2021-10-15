import { useCallback, useEffect, useState } from "react";
import { getDocument } from "../scripts/fireStore";

export default function useDocument(collection: string, document: string) {
  const [data, setData] = useState(Object);

  const fetchData = useCallback(async (path, doc) => {
    try {
      const data = await getDocument(path, doc);
      setData(data);
    } catch {}
  }, []);

  useEffect(() => {
    fetchData(collection, document);
  }, [fetchData, collection, document]);

  return { data };
}
