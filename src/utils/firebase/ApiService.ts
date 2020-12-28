import { firestore } from '.';
import { IApi } from '../../types';

export async function getApis(uid: string) {
  const apis : IApi[] = [];
  try {
    const ref = firestore.collection('apis');
    const querySnapshot = await ref.where('uid', '==', uid).get();
    querySnapshot.forEach(doc => apis.push(doc.data() as IApi));
  } catch(e) {
    console.error(e);
  }
  return apis;
}
