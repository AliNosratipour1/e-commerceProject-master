import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('k1H0sQ2qaR9BJRYiSm2b').collection('cartitems')

.doc('ZbjfWb7tsCwsWdurx46S');

firestore.doc('users/k1H0sQ2qaR9BJRYiSm2b/cartitems/ZbjfWb7tsCwsWdurx46S');
firestore.collection('users/k1H0sQ2qaR9BJRYiSm2b/cartitems');