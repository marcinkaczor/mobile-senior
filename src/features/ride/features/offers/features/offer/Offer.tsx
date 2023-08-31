import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import * as React from 'react';

import { DESTINATIONS } from '@mobileSenior/constants/destination';
import { DRIVERS, DriverGender } from '@mobileSenior/constants/driver';
import { PREFERENCES } from '@mobileSenior/constants/preference';
import { ROUTER } from '@mobileSenior/constants/router';
import { useReserveCommand } from '@mobileSenior/features/ride/features/offers/features/offer/commands/reserve';
import { useApplicationContext } from '@mobileSenior/store/context';
import { RideOffer } from '@mobileSenior/types/rideOffer';
import { formatDateToDisplay } from '@mobileSenior/utils/formatDateToDisplay';
import { QueryStatus } from '@mobileSenior/utils/queryStatus';
import { useEnhancedEffect } from '@mobileSenior/utils/useEnhancedEffect';
import { useScript } from '@mobileSenior/utils/useScript';
import { Avatar, Button, Chip, Divider } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

interface Props {
  rideOffer: RideOffer;
  reserved: boolean;
}

export function Offer({ rideOffer, reserved }: Props) {
  const status = useScript(`https://unpkg.com/feather-icons`);

  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  const [isLiked, setIsLiked] = React.useState(false);

  const {
    state: {
      reservations: { queryStatus },
    },
  } = useApplicationContext();

  const navigate = useNavigate();

  const reserve = useReserveCommand();

  const rideOfferDriver = React.useMemo(
    () => DRIVERS.find((driver) => rideOffer.driverId === driver.id),
    [rideOffer.driverId],
  );

  if (!rideOfferDriver) {
    return null;
  }

  return (
    <Card
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
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        width="100%"
        spacing={2.5}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: 64,
            },
            marginBottom: {
              xs: -2.5,
              sm: 0,
            },
          }}
        >
          <AspectRatio
            ratio={1}
            variant="plain"
            sx={(theme) => ({
              borderRadius: 'xs',
              [theme.breakpoints.down('sm')]: {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            })}
          >
            <Avatar />
            <IconButton
              variant={isLiked ? 'solid' : 'soft'}
              onClick={() => setIsLiked((prev) => !prev)}
              sx={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              <i data-feather="star" />
            </IconButton>
          </AspectRatio>
        </Box>
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
          >
            <div>
              <Typography color="primary" fontSize="sm" fontWeight="lg">
                {rideOfferDriver.gender === DriverGender.Man ? 'PAN' : 'PANI'}
              </Typography>
              <Typography fontWeight="md" fontSize="lg">
                {rideOfferDriver.name} {rideOfferDriver.surname}
              </Typography>
            </div>
            <IconButton
              variant={isLiked ? 'solid' : 'soft'}
              onClick={() => setIsLiked((prev) => !prev)}
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <i data-feather="star" />
            </IconButton>
          </Stack>
          <Stack spacing={1} direction="row">
            <Typography>{rideOfferDriver.description}</Typography>
          </Stack>

          <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
            {rideOfferDriver.preferenceCodes.map((preferenceCode) => (
              <Chip
                key={preferenceCode}
                color="neutral"
                size="sm"
                variant="soft"
              >
                {
                  PREFERENCES.find(
                    (preference) => preference.code === preferenceCode,
                  )?.name
                }
              </Chip>
            ))}
          </Stack>

          <Stack spacing={3} direction="row">
            <Typography startDecorator={<i data-feather="map-pin" />}>
              {rideOfferDriver.city}
            </Typography>
            <Typography startDecorator={<i data-feather="eye" />}>
              {rideOfferDriver.car.vendor} {rideOfferDriver.car.model}
            </Typography>
            <Typography startDecorator={<i data-feather="sidebar" />}>
              {rideOfferDriver.car.boardNumber}
            </Typography>
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
              justifyContent="end"
              flexGrow={1}
            >
              <Typography
                color="danger"
                level="body3"
                sx={{ textDecoration: 'line-through' }}
              >
                <strong>{rideOffer.price} PLN</strong>
              </Typography>
              <Typography>
                <strong>0 PLN</strong>
              </Typography>
              {!reserved && (
                <Button
                  disabled={queryStatus === QueryStatus.InProgress}
                  size="sm"
                  onClick={async () => {
                    await reserve(rideOffer.driverId);
                    navigate(ROUTER.HOME);
                  }}
                >
                  Rezerwuj
                </Button>
              )}
            </Stack>
          </Stack>

          {reserved && (
            <>
              <Divider orientation="horizontal" />
              <Stack
                spacing={1}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <div>
                  <Typography fontWeight="md" fontSize="lg">
                    Cele
                  </Typography>
                </div>
              </Stack>
              <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                {rideOffer.destinationIds.map((destinationId) => (
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
                  <Typography fontWeight="md" fontSize="lg">
                    Odbiór
                  </Typography>
                </div>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography>
                  {formatDateToDisplay(new Date(rideOffer.arrivalDateTime))}
                </Typography>
              </Stack>

              <Stack spacing={1} direction="row">
                <div>
                  <Typography fontWeight="md" fontSize="lg">
                    Powrót
                  </Typography>
                </div>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography>
                  {formatDateToDisplay(new Date(rideOffer.departureDateTime))}
                </Typography>
              </Stack>

              <Stack
                spacing={1}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <div>
                  <Typography fontWeight="md" fontSize="lg">
                    Preferencje
                  </Typography>
                </div>
              </Stack>
              <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                {rideOffer.preferenceIds.map((preferenceId) => (
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
            </>
          )}
        </Stack>
      </Stack>
    </Card>
  );
}
