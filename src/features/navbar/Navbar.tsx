import GlobalStyles from '@mui/joy/GlobalStyles';

import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import { toggleSidebar } from '@mobileSenior/utils/sidebar';
import { ColorSchemeToggle } from '@mobileSenior/utils/ColorSchemeToggle';

export function Navbar() {
  return (
    <Sheet
      sx={{
        display: { xs: 'flex', md: 'none' },
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex: 9995,
        py: 1,
        px: 2,
        gap: 1,
        boxShadow: 'sm',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '0px',
            },
          },
        })}
      />
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="neutral"
        size="sm"
      >
        <i data-feather="menu" />
      </IconButton>
      <ColorSchemeToggle id={undefined} />
    </Sheet>
  );
}
