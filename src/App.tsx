import { customTheme } from '@mobileSenior/utils/theme';
import { useScript } from '@mobileSenior/utils/useScript';

import { Navbar } from '@mobileSenior/features/navbar/Navbar';
import { Box, CssBaseline, CssVarsProvider, GlobalStyles } from '@mui/joy';

import { useEnhancedEffect } from '@mobileSenior/utils/useEnhancedEffect';

import { Home } from '@mobileSenior/features/home/Home';
import Profile from '@mobileSenior/features/profile/Profile';
import { Rides } from '@mobileSenior/features/rides/Rides';
import { Settings } from '@mobileSenior/features/settings/Settings';
import { Sidebar } from '@mobileSenior/features/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';

export function App() {
  const status = useScript(`https://unpkg.com/feather-icons`);

  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  return (
    <CssVarsProvider disableTransitionOnChange theme={customTheme}>
      <GlobalStyles
        styles={{
          '[data-feather], .feather': {
            color: 'var(--Icon-color)',
            margin: 'var(--Icon-margin)',
            fontSize: 'var(--Icon-fontSize, 20px)',
            width: '1em',
            height: '1em',
          },
        }}
      />
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Navbar />
        <Sidebar />
        <Box
          component="main"
          className="MainContent"
          sx={(theme) => ({
            '--main-paddingTop': {
              xs: `calc(${theme.spacing(2)} + var(--Header-height, 0px))`,
              md: '32px',
            },
            px: {
              xs: 2,
              md: 3,
            },
            pt: 'var(--main-paddingTop)',
            pb: {
              xs: 2,
              sm: 2,
              md: 3,
            },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
            overflow: 'auto',
          })}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rides" element={<Rides />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
