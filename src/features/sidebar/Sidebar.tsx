import { ColorSchemeToggle } from '@mobileSenior/utils/ColorSchemeToggle';
import { closeSidebar } from '@mobileSenior/utils/sidebar';
import { Link } from '@mui/joy';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import GlobalStyles from '@mui/joy/GlobalStyles';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export function Sidebar() {
  const [isCardVisible, setCardVisible] = useState(true);

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: {
          xs: 'fixed',
          md: 'sticky',
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 1.5,
        py: 3,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '256px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '288px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: 'background.body',
          opacity: 'calc(var(--SideNavigation-slideIn, 0) - 0.2)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Typography fontWeight="xl">MOBILNY SENIOR</Typography>
        <ColorSchemeToggle sx={{ ml: 'auto' }} />
      </Box>
      <Input
        startDecorator={<i data-feather="search" />}
        placeholder="Szukaj"
      />
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '4px',
            '--List-nestedInsetStart': '40px',
          }}
        >
          <ListItem component={RouterLink} to="/">
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="home" />
              </ListItemDecorator>
              <ListItemContent>Strona główna</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem component={RouterLink} to="/rides">
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="calendar" />
              </ListItemDecorator>
              <ListItemContent>Przejazd</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
        <List
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--ListItem-radius': '8px',
            '--List-gap': '8px',
          }}
        >
          <ListItem component={RouterLink} to="/profile">
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="user" />
              </ListItemDecorator>
              <ListItemContent>Profil</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem component={RouterLink} to="/settings">
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="settings" />
              </ListItemDecorator>
              <ListItemContent>Ustawienia</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      {isCardVisible && (
        <Card
          variant="soft"
          color="primary"
          invertedColors
          sx={{ boxShadow: 'none' }}
        >
          <Typography fontSize="sm" fontWeight="lg" mb={0.5}>
            Wykorzystane przejazdy
          </Typography>
          <Typography level="body3">
            Wykorzystałeś w tym miesiącu <b>4</b> przejazdy oferowane przez
            gminę <b>Ogrodzieniec</b>. Pozostał Ci do wykorzystania <b>1</b>{' '}
            przejazd.
          </Typography>
          <LinearProgress value={80} determinate sx={{ my: 1.5 }} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Link
              fontSize="sm"
              component="button"
              onClick={() => setCardVisible(false)}
            >
              Rozumiem
            </Link>
          </Box>
        </Card>
      )}

      <Divider />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar variant="outlined" src="/static/images/avatar/3.jpg" />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography fontSize="sm" fontWeight="lg">
            Gałązka B.
          </Typography>
          <Typography level="body3">galazka.bogdan@gmail.com</Typography>
        </Box>
        <IconButton variant="plain" color="neutral">
          <i data-feather="log-out" />
        </IconButton>
      </Box>
    </Sheet>
  );
}
