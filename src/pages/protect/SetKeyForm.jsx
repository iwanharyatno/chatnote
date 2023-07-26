import { useState } from 'react';

import AuthStore from '../../storage/AuthStore.js';
import Button from '../../shared/Button.jsx';
import TextField from '../../shared/TextFields.jsx';

function SetKeyForm({ onNext }) { 
  const [key, setKey] = useState('');
  const [keyConfirm, setKeyConfirm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (keyConfirm !== key) {
      window.alert('Please type again the same key');
      return;
    }
    AuthStore.saveSecret(key);
    if (onNext) onNext();
  };

  return (
    <form className="max-w-3xl mx-auto mt-8 px-4" onSubmit={onSubmit}>
      <h1 className="text-center text-3xl font-bold text-blue-500 mb-5">Let's get this done</h1>
      <p className="text-gray-500 mb-4 text-sm max-w-4xl">Please create a key to protect your messages. A "key" here is basically a password. But you will only "login" using this key without any username to access your messages.</p>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <TextField type="password" placeholder="Type your secret key" onChange={(e) => setKey(e.target.value)} />
        <TextField type="password" placeholder="Type again your secret key" onChange={(e) => setKeyConfirm(e.target.value)} />
        <Button type="submit" className="md:ml-auto">Save My Key</Button>
      </div>
    </form>
  );
}

export default SetKeyForm;
