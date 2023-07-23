import { DESTINATIONS, PREFERENCES } from '@mobileSenior/constants';
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

export function Rides() {
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
              >
                {DESTINATIONS.map((destination) => (
                  <Option value={destination.id}>{destination.name}</Option>
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
              />
            </FormControl>
          </Box>
          <Box gridColumn="span 3">
            <FormControl>
              <FormLabel>Powrót</FormLabel>
              <Input
                type="datetime-local"
                placeholder="Data i godzina powrotu"
              />
            </FormControl>
          </Box>
          <Box gridColumn="span 6">
            <FormControl>
              <FormLabel>Preferencje</FormLabel>
              <Select placeholder="Osobiste preferencje">
                {PREFERENCES.map((preference) => (
                  <Option value={preference.id}>{preference.name}</Option>
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
      </Box>
    </Sheet>
  );
}
