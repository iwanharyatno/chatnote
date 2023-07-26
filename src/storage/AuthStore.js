import { Buffer } from 'buffer';
import Constants from '../constants';

const AuthStore = {
  saveSecret: (value) => {
    const salt = Buffer.from(new Date().getTime().toString()).toString('base64');
    const base64Secret = Buffer.from(value + salt).toString('base64');
    const sign = Buffer.from(salt + base64Secret).toString('base64');

    const result = [salt, base64Secret, sign].join('.');

    window.localStorage.setItem(Constants.APP_HAVE_PROTECTED_KEY, result);
  },
  checkSecret: (value) => {
    const [salt, base64Secret, sign] = window.localStorage.getItem(Constants.APP_HAVE_PROTECTED_KEY).split('.');
    if (Buffer.from(salt + base64Secret).toString('base64') !== sign) return false;
    if (Buffer.from(value + salt).toString('base64') !== base64Secret) return false;
    return true;
  },
  hasProtected: () => {
    return !!window.localStorage.getItem(Constants.APP_HAVE_PROTECTED_KEY);
  }
};

export default AuthStore;
