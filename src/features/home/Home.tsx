import { DESTINATIONS } from '@mobileSenior/constants/destination';
import { PREFERENCES } from '@mobileSenior/constants/preference';
import { UserRole } from '@mobileSenior/constants/user';
import { Offer } from '@mobileSenior/features/ride/features/offers/features/offer/Offer';
import { useApplicationContext } from '@mobileSenior/store/context';
import { RideOffer } from '@mobileSenior/types/rideOffer';
import { formatDateToDisplay } from '@mobileSenior/utils/formatDateToDisplay';
import { useEnhancedEffect } from '@mobileSenior/utils/useEnhancedEffect';
import { useScript } from '@mobileSenior/utils/useScript';
import { Box, Card, Chip, Sheet, Stack, Typography } from '@mui/joy';

export function Home() {
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
      driverOffers: { results: driverOffers },
      reservations: { results: reservations },
    },
  } = useApplicationContext();

  let infix = '';
  let items: RideOffer[] = [];
  if (role === UserRole.Senior) {
    infix = 'zarezerwowanych';
    items = reservations;
  }

  if (role === UserRole.Driver) {
    infix = 'opublikowanych';
    items = driverOffers;
  }

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
      <Typography level="h1" fontSize="xl2">
        Strona główna
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
        {!items.length && (
          <Typography level="body1">
            Brak aktualnie {infix} przejazdów
          </Typography>
        )}
        {items.map((item, index) => (
          <Card
            key={index}
            variant="outlined"
            orientation="horizontal"
            sx={{
              transition: '250ms all',
              padding: {
                xs: 0,
                sm: 2,
              },
              marginTop: { xs: 2, sm: 2.5 },
              boxShadow: 'none',
              borderRadius: 'sm',
              '&:hover': {
                boxShadow: 'md',
                borderColor: 'neutral.outlinedHoverBorder',
              },
            }}
          >
            <Stack
              sx={{
                padding: {
                  xs: 2,
                  sm: 0,
                },
              }}
              spacing={1}
              flex={1}
            >
              <Stack
                spacing={1}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                marginBottom={1}
              >
                <div>
                  <Typography fontWeight="md" fontSize="xl">
                    Przejazd {`#${index + 1}`}
                  </Typography>
                </div>
              </Stack>
              <Stack
                spacing={1}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <div>
                  <Typography fontWeight="md" fontSize="md">
                    Cele
                  </Typography>
                </div>
              </Stack>
              <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                {item.destinationIds.map((destinationId) => (
                  <Chip
                    key={destinationId}
                    color="neutral"
                    size="sm"
                    variant="soft"
                  >
                    {
                      DESTINATIONS.find(
                        (destination) => destination.id === destinationId,
                      )?.name
                    }
                  </Chip>
                ))}
              </Stack>

              <Stack spacing={1} direction="row">
                <div>
                  <Typography fontWeight="md" fontSize="md">
                    Odbiór
                  </Typography>
                </div>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography>
                  {formatDateToDisplay(new Date(item.arrivalDateTime))}
                </Typography>
              </Stack>

              <Stack spacing={1} direction="row">
                <div>
                  <Typography fontWeight="md" fontSize="md">
                    Powrót
                  </Typography>
                </div>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography>
                  {formatDateToDisplay(new Date(item.departureDateTime))}
                </Typography>
              </Stack>

              <Stack
                spacing={1}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <div>
                  <Typography fontWeight="md" fontSize="md">
                    Preferencje
                  </Typography>
                </div>
              </Stack>
              <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                {item.preferenceIds.map((preferenceId) => (
                  <Chip
                    key={preferenceId}
                    color="neutral"
                    size="sm"
                    variant="soft"
                  >
                    {
                      PREFERENCES.find(
                        (preference) => preference.id === preferenceId,
                      )?.name
                    }
                  </Chip>
                ))}
              </Stack>
              {role === UserRole.Senior && (
                <Stack marginTop={1}>
                  <Offer rideOffer={item} reserved />
                </Stack>
              )}
            </Stack>
          </Card>
        ))}
      </Box>
    </Sheet>
  );
}
