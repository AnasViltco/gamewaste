
import { toast } from 'react-toastify';

import { db } from "firebase-config";
import { updateDoc, doc } from "firebase/firestore";

export const handleCollection = async (id: any, loggedInUser: any) => {
    if (!Object.keys(loggedInUser).length) {
        toast.error('login to your account ...')
        return;
    }

    let collection: any[] = loggedInUser.collection
    const exist = collection.find(item => item === id)
    if (exist) {
        collection = collection.filter(item => item !== id)
        toast.success('remove from collection ...')
    } else {
        collection.push(id)
        toast.success('Added to your collection ...')
    }
    const data = { ...loggedInUser, collection }
    // setLoggedInUser(data)
    const userDoc = doc(db, "users", loggedInUser.id);
    await updateDoc(userDoc, data);
    return data;

}