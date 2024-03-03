import { setGlobalOptions } from 'firebase-functions/v2/options';
import { onCall } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';

setGlobalOptions({ region: 'europe-west1' });

admin.initializeApp();

const db = admin.firestore();

exports.deleteUser = onCall(async (req) => {
  console.log(JSON.stringify(req.data.id));
  return db
    .doc(`users/${req.data.id}`)
    .delete()
    .then((result) => result)
    .catch((err) => err);
});
