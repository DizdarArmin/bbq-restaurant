import { getFirestore } from "@firebase/firestore/lite";

import { useEffect, useState } from "react";
import firebaseInstance from "../scripts/firebase";
import { getCollection } from "../scripts/fireStore";

export default function useCollection(collection: string) {
  const database = getFirestore(firebaseInstance);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(Array<any>());

  useEffect(() => {
    getCollection(collection)
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [database, collection]);

  return { data, loading, error };
}
