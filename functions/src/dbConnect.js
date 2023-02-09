import { initializeApp, cert, getApps } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore"
import { service_account } from "../service_account.js";

export default function dbConnect() {
    if(!getApps().length) {
        // not yet connected...
        initializeApp({
            credential: cert(service_account),
        })
    }
    return getFirestore();
}

