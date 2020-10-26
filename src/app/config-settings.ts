import { MenuItem } from './shared/models';
import { IProduct } from './shared/models/product.interface';

const firebaseConfig = {
    apiKey: 'AIzaSyAdGBmiazKoRAUdjoQElZNVzt8cvXfpTwo',
    authDomain: 'waters-corp.firebaseapp.com',
    databaseURL: 'https://waters-corp.firebaseio.com',
    projectId: 'waters-corp',
    storageBucket: 'waters-corp.appspot.com',
    messagingSenderId: '1049807670747',
    appId: '1:1049807670747:web:31b7eead3f04c92ec9ebfe'
  };

const menuLinks: Array<MenuItem> = [
  {
    icon: 'link',
    title: 'about me',
    link: 'https://richcheng.com'
  },
  {
    icon: 'archive',
    title: 'waters-corp-demo-app angular 10 source codes',
    link: 'https://github.com/richcheng/waters-corp-demo-app'
  },
  {
    icon: 'link',
    title: 'Fork on Github',
    link: 'https://github.com/richcheng'
  },
];

// const productList = new Map<string, IProduct>()
//   .set('STARTER', {name: 'STARTER', price: 1, backgroundColor: '#979797'})
//   .set('REGULAR', {name: 'REGULAR', price: 25, backgroundColor: '#4F8BFA'})
//   .set('PROFESSIONAL', {name: 'PROFESSIONAL', price: 75, backgroundColor: '#886EE9'})
//   .set('ULTIMATE', {name: 'ULTIMATE', price: 115, backgroundColor: '#DF3345'});

const productList = [
  {name: 'STARTER', price: 1, backgroundColor: '#979797'},
  {name: 'REGULAR', price: 25, backgroundColor: '#3B86FF'},
  {name: 'PROFESSIONAL', price: 75, backgroundColor: '#8B68EE'},
  {name: 'ULTIMATE', price: 115, backgroundColor: '#EE3541'}
];

export const settings = {
  firebaseConfig,
  menuLinks,
  productList
};
