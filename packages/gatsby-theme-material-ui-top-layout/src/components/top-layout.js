import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import Viewport from './viewport';

export default function TopLayout({ children, theme, jssCompat }) {
  return (
    <>
      <Viewport />
      <StyledEngineProvider injectFirst={jssCompat}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
