import { Offer } from '@mobileSenior/features/ride/features/offers/features/offer/Offer';
import { useApplicationContext } from '@mobileSenior/store/context';
import { useEnhancedEffect } from '@mobileSenior/utils/useEnhancedEffect';
import { useScript } from '@mobileSenior/utils/useScript';
import { Box, Sheet, Stack, Typography } from '@mui/joy';

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
      reservations: { results: reservations },
    },
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
        {reservations.map((reservation) => (
          <Stack key={reservation.id}>
            <Offer rideOffer={reservation} reserved />
          </Stack>
        ))}
      </Box>
    </Sheet>
  );
}
