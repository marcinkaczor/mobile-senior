import { DESTINATIONS } from '@mobileSenior/constants/destination';
import { PREFERENCES } from '@mobileSenior/constants/preference';
import { ROUTER } from '@mobileSenior/constants/router';
import { UserRole } from '@mobileSenior/constants/user';
import { Offers } from '@mobileSenior/features/ride/features/offers/Offers';
import { usePublishCommand } from '@mobileSenior/features/ride/features/offers/commands/publish';
import { useSearchCommand } from '@mobileSenior/features/ride/features/offers/commands/search';
import { useApplicationContext } from '@mobileSenior/store/context';
import { QueryStatus } from '@mobileSenior/utils/queryStatus';
import { useEnhancedEffect } from '@mobileSenior/utils/useEnhancedEffect';
import { useScript } from '@mobileSenior/utils/useScript';
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from '@mui/joy';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Ride() {
  const status = useScript(`https://unpkg.com/feather-icons`);

  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  const {
    state: {
      user: { role },
      driverOffers: { queryStatus: driverOffersQS },
      rideOffers: { queryStatus: rideOffersQS },
      rideQuery: {
        destinations,
        arrivalDateTime,
        departureDateTime,
        preferences,
      },
    },
    clear,
    setRideQueryDestinations,
    setRideQueryArrivalDateTime,
    setRideQueryDepartureDateTime,
    setRideQueryPreferences,
  } = useApplicationContext();

  const navigate = useNavigate();

  let queryStatus = QueryStatus.Initial;
  if (role === UserRole.Senior) {
    queryStatus = rideOffersQS;
  }
  if (role === UserRole.Driver) {
    queryStatus = driverOffersQS;
  }

  const search = useSearchCommand();
  const publish = usePublishCommand();

  const click = useCallback(async () => {
    if (role === UserRole.Senior) {
      search();
    }
    if (role === UserRole.Driver) {
      await publish();
      navigate(ROUTER.HOME);
    }
  }, [role, search, publish, navigate]);

  useEffect(() => {
    return clear();
  }, [clear]);

  return (
    <Sheet
      sx={{
        bgcolor: 'background.body',
        flex: 1,
        maxWidth: 1200,
        width: '100%',
        mx: 'auto',
      }}
    >
      <Typography level="h1" fontSize="xl2" sx={{ mb: 1 }}>
        Przejazd
      </Typography>
      <Box
        sx={{
          pt: 3,
          pb: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: '100%',
            lg: '80%',
          },
        }}
      >
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          sx={{
            columnGap: { xs: 2, sm: 3, md: 4 },
            rowGap: { xs: 2, sm: 2.5 },
          }}
        >
          <Box gridColumn="span 12">
            <FormControl>
              <FormLabel>Cel</FormLabel>
              <Autocomplete
                multiple
                disabled={queryStatus === QueryStatus.InProgress}
                placeholder="Placówka współpracująca z NFZ"
                startDecorator={<i data-feather="map-pin" />}
                getOptionLabel={(option) => option.name}
                value={destinations}
                options={DESTINATIONS}
                onChange={(_, value) => setRideQueryDestinations(value)}
              />
            </FormControl>
          </Box>
          <Box gridColumn="span 6">
            <FormControl>
              <FormLabel>Odbiór</FormLabel>
              <Input
                disabled={queryStatus === QueryStatus.InProgress}
                type="datetime-local"
                placeholder="Data i godzina odbioru"
                value={arrivalDateTime}
                onChange={(event) =>
                  setRideQueryArrivalDateTime(event.target.value)
                }
              />
            </FormControl>
          </Box>
          <Box gridColumn="span 6">
            <FormControl>
              <FormLabel>Powrót</FormLabel>
              <Input
                disabled={queryStatus === QueryStatus.InProgress}
                type="datetime-local"
                placeholder="Data i godzina powrotu"
                value={departureDateTime}
                onChange={(event) =>
                  setRideQueryDepartureDateTime(event.target.value)
                }
              />
            </FormControl>
          </Box>
          <Box gridColumn="span 12">
            <FormControl>
              <FormLabel>Preferencje</FormLabel>
              <Autocomplete
                multiple
                disabled={queryStatus === QueryStatus.InProgress}
                placeholder="Osobiste preferencje"
                startDecorator={<i data-feather="hash" />}
                getOptionLabel={(option) =>
                  role === UserRole.Senior ? option.description : option.name
                }
                value={preferences}
                options={PREFERENCES}
                onChange={(_, value) => setRideQueryPreferences(value)}
              />
            </FormControl>
          </Box>
          <Box
            sx={{
              gridColumn: '1/-1',
              justifySelf: 'flex-end',
              display: 'flex',
            }}
          >
            <Button
              color="neutral"
              disabled={queryStatus === QueryStatus.InProgress}
              size="sm"
              sx={{ marginRight: 1 }}
              variant="outlined"
              onClick={clear}
            >
              Wyczyść
            </Button>
            <Button
              disabled={queryStatus === QueryStatus.InProgress}
              size="sm"
              onClick={click}
            >
              {role === UserRole.Senior && 'Szukaj'}
              {role === UserRole.Driver && 'Publikuj'}
            </Button>
          </Box>
        </Box>
        <Offers />
      </Box>
    </Sheet>
  );
}
