import React, { useState } from 'react';

import List from './components/List';
import Search from './components/Search';

export default function App() {
  const [searchConfirmed, setSearchConfirmed] = useState(false);

  return (
    <>
      {!searchConfirmed ? (
        <Search searchConfirmedCallback={(confirmed) => setSearchConfirmed(confirmed)} />
      ) : (
        <List searchConfirmedCallback={(confirmed) => setSearchConfirmed(confirmed)} />
      )}      
    </>
  );
}
