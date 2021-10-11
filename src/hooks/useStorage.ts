import firebaseInstance from "../scripts/firebase";

import { getStorage } from "@firebase/storage";

const storage = getStorage(firebaseInstance);

console.log(storage);
