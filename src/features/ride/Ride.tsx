import { DESTINATIONS } from '@mobileSenior/constants/destination';
import { PREFERENCES } from '@mobileSenior/constants/preference';
import { Offers } from '@mobileSenior/features/ride/features/offers/Offers';
import { useApplicationContext } from '@mobileSenior/store/context';
import { useEnhancedEffect } from '@mobileSenior/utils/useEnhancedEffect';
import { useScript } from '@mobileSenior/utils/useScript';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
  Sheet,
  Typography,
} from '@mui/joy';

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
    setRideQueryDestinationId,
    setRideQueryArrivalDateTime,
    setRideQueryDepartureDateTime,
    setRideQueryPreferenceId,
  } = useApplicationContext();

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
              <Select
                placeholder="Placówka współpracująca z NFZ"
                startDecorator={<i data-feather="map-pin" />}
                defaultValue=""
                onChange={(_, value) =>
                  value && setRideQueryDestinationId(value)
                }
              >
                {DESTINATIONS.map((destination) => (
                  <Option key={destination.id} value={destination.id}>
                    {destination.name}
                  </Option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box gridColumn="span 3">
            <FormControl>
              <FormLabel>Odbiór</FormLabel>
              <Input
                type="datetime-local"
                placeholder="Data i godzina odbioru"
                value="2023-01-01T14:00"
                onChange={(event) =>
                  setRideQueryArrivalDateTime(event.target.value)
                }
              />
            </FormControl>
          </Box>
          <Box gridColumn="span 3">
            <FormControl>
              <FormLabel>Powrót</FormLabel>
              <Input
                type="datetime-local"
                placeholder="Data i godzina powrotu"
                onChange={(event) =>
                  setRideQueryDepartureDateTime(event.target.value)
                }
              />
            </FormControl>
          </Box>
          <Box gridColumn="span 6">
            <FormControl>
              <FormLabel>Preferencje</FormLabel>
              <Select
                placeholder="Osobiste preferencje"
                defaultValue=""
                onChange={(_, value) =>
                  value && setRideQueryPreferenceId(value)
                }
              >
                {PREFERENCES.map((preference) => (
                  <Option key={preference.id} value={preference.id}>
                    {preference.description}
                  </Option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              gridColumn: '1/-1',
              justifySelf: 'flex-end',
              display: 'flex',
            }}
          >
            <Button size="sm">Szukaj</Button>
          </Box>
        </Box>
        <Offers />
      </Box>
    </Sheet>
  );
}
