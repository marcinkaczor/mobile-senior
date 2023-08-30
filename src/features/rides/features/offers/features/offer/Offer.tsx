import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import * as React from 'react';

import { PREFERENCES } from '@mobileSenior/constants/preference';
import { OfferItem } from '@mobileSenior/features/rides/features/offers/constants/offerItems';
import { Avatar, Button, Chip } from '@mui/joy';

interface Props {
  item: OfferItem;
}

export function Offer({ item }: Props) {
  const [isLiked, setIsLiked] = React.useState(false);

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
                {item.driver.gender === 'M' ? 'PAN' : 'PANI'}
              </Typography>
              <Typography fontWeight="md" fontSize="lg">
                {item.driver.name} {item.driver.surname}
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
            <Typography>{item.driver.description}</Typography>
          </Stack>

          <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
            {item.preferenceCodes.map((preferenceCode) => (
              <Chip key={item.id} color="neutral" size="sm" variant="soft">
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
              {item.driver.city}
            </Typography>
            <Typography startDecorator={<i data-feather="eye" />}>
              {item.driver.car.vendor} {item.driver.car.model}
            </Typography>
            <Typography startDecorator={<i data-feather="sidebar" />}>
              {item.driver.car.boardNumber}
            </Typography>
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
              justifyContent="end"
              flexGrow={1}
            >
              <Typography>
                <strong>
                  {item.price.value} {item.price.currency}
                </strong>
              </Typography>
              <Button size="sm">Rezerwuj</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
