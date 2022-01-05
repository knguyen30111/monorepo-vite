import { Button } from '@gan/shared-components';
import Input from '@src/components/Input';
import i18n from '@src/i18n';
import React from 'react';

i18n();

const App = (): React.ReactElement => {
  return (
    <>
      <h1>The boiler plate is using vite and react</h1>
      <Input value={1} />
      <Button onClick={() => alert(1)}>Click me</Button>
    </>
  );
};

export default App;
