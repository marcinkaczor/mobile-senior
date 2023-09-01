import { ROUTER } from '@mobileSenior/constants/router';
import { USERS } from '@mobileSenior/constants/user';
import { useApplicationContext } from '@mobileSenior/store/context';
import { useEnhancedEffect } from '@mobileSenior/utils/useEnhancedEffect';
import { useScript } from '@mobileSenior/utils/useScript';
import { Box, Button, FormControl, Input, Sheet, Typography } from '@mui/joy';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const status = useScript(`https://unpkg.com/feather-icons`);

  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  const navigate = useNavigate();

  const { setUser } = useApplicationContext();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = useCallback(() => {
    if (email === USERS[0].email && password === 'koala') {
      setUser(USERS[0]);
      navigate(ROUTER.HOME);
    }

    if (email === USERS[1].email && password === 'gepard') {
      setUser(USERS[1]);
      navigate(ROUTER.HOME);
    }
  }, [email, password, navigate, setUser]);

  return (
    <Sheet
      sx={{
        bgcolor: 'background.body',
        flex: 1,
        flexGrow: 1,
        maxWidth: 600,
        width: '100%',
        height: '100vh',
        mx: 'auto',
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography fontWeight="xl">MOBILNY SENIOR</Typography>
      <FormControl sx={{ display: { sm: 'contents' } }}>
        <Input
          type="email"
          startDecorator={<i data-feather="mail" />}
          placeholder="adres email"
          sx={{ width: '100%', marginTop: 3 }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ display: { sm: 'contents' } }}>
        <Input
          type="password"
          startDecorator={<i data-feather="key" />}
          placeholder="hasło"
          sx={{ width: '100%', marginTop: 3 }}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormControl>
      <Box
        sx={{
          gridColumn: '1/-1',
          justifySelf: 'flex-end',
          display: 'flex',
          marginTop: 3,
          justifyContent: 'end',
        }}
      >
        <Button size="sm" onClick={login}>
          Zaloguj
        </Button>
      </Box>
    </Sheet>
  );
};
