import React from 'react';

import TopLayout from './components/top-layout';
import theme from './theme';

export default function wrapWithProvider({ element }, { jssCompat }) {
  return (
    <TopLayout theme={theme} jssCompat={jssCompat}>
      {element}
    </TopLayout>
  );
}
