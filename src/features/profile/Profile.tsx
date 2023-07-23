import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { chipClasses } from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Sheet from '@mui/joy/Sheet';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabList from '@mui/joy/TabList';
import Tabs from '@mui/joy/Tabs';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';

export default function MyProfile() {
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
        Profil
      </Typography>
      <Tabs
        defaultValue={0}
        sx={{
          bgcolor: 'background.body',
          '--Tab-height': '48px',
        }}
      >
        <Box
          sx={{
            '--_shadow-height': '16px',
            height: 0,
            position: 'sticky',
            top: 'calc(var(--Tab-height) - var(--main-paddingTop, 0px) + var(--Header-height, 0px) - (var(--_shadow-height) / 2))',
            zIndex: 1,
            '&::before': {
              content: '""',
              display: 'block',
              position: 'relative',
              zIndex: 1,
              height: 'var(--_shadow-height)',
              background:
                'radial-gradient(closest-side, rgba(0 0 0 / 0.12), transparent 100%)',
            },
          }}
        />
        <TabList
          variant="plain"
          size="sm"
          sx={(theme) => ({
            '--List-padding': '0px',
            '--ListItem-minHeight': 'var(--Tab-height)',
            '--Chip-minHeight': '20px',
            '--_TabList-bg': theme.vars.palette.background.body,
            backgroundColor: 'var(--_TabList-bg)',
            boxShadow: `inset 0 -1px 0 0 ${theme.vars.palette.divider}`,
            position: 'sticky',
            top: 'calc(-1 * (var(--main-paddingTop, 0px) - var(--Header-height, 0px)))',
            zIndex: 10,
            width: '100%',
            overflow: 'auto hidden',
            alignSelf: 'flex-start',
            borderRadius: 0,
            scrollSnapType: 'inline',
            '&::after': {
              pointerEvents: 'none',
              display: { xs: 'block', sm: 'none' },
              content: '""',
              position: 'sticky',
              top: 0,
              width: 40,
              flex: 'none',
              zIndex: 1,
              right: 0,
              borderBottom: '1px solid transparent',
              background: `linear-gradient(to left, var(--_TabList-bg), rgb(0 0 0 / 0))`,
              backgroundClip: 'content-box',
            },
            '&::-webkit-scrollbar': {
              width: 0,
              display: 'none',
            },
            [`& .${tabClasses.root}`]: {
              '&:first-of-type': {
                ml: 'calc(-1 * var(--ListItem-paddingX))',
              },
              scrollSnapAlign: 'start',
              bgcolor: 'transparent',
              boxShadow: 'none',
              flex: 'none',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  zIndex: 1,
                  bottom: 0,
                  left: 'var(--ListItem-paddingLeft)',
                  right: 'var(--ListItem-paddingRight)',
                  height: '2px',
                  bgcolor: 'primary.500',
                },
                [`& .${chipClasses.root}`]: theme.variants.solid.primary,
              },
            },
          })}
        >
          <Tab value={0}>Ogólne</Tab>
        </TabList>
        <Box
          sx={{
            pt: 3,
            pb: 10,
            display: 'grid',
            gridTemplateColumns: {
              xs: '100%',
              sm: 'minmax(120px, 30%) 1fr',
              lg: '280px 1fr minmax(120px, 208px)',
            },
            columnGap: { xs: 2, sm: 3, md: 4 },
            rowGap: { xs: 2, sm: 2.5 },
            '& > hr': {
              gridColumn: '1/-1',
            },
          }}
        >
          <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>
            Imię i nazwisko
          </FormLabel>
          <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
            <FormControl sx={{ flex: 1 }}>
              <FormLabel sx={{ display: { sm: 'none' } }}>Imię</FormLabel>
              <Input placeholder="imię" defaultValue="" />
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormLabel sx={{ display: { sm: 'none' } }}>Nazwisko</FormLabel>
              <Input placeholder="nazwisko" defaultValue="" />
            </FormControl>
          </Box>

          <Divider role="presentation" />

          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              startDecorator={<i data-feather="mail" />}
              placeholder="adres email"
              defaultValue=""
            />
          </FormControl>

          <Divider role="presentation" />

          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Ulica</FormLabel>
            <Input placeholder="ulica" defaultValue="" />
          </FormControl>

          <Divider role="presentation" />

          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Gmina</FormLabel>
            <Input placeholder="gmina" defaultValue="" />
          </FormControl>

          <Divider role="presentation" />

          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Powiat</FormLabel>
            <Input placeholder="powiat" defaultValue="" />
          </FormControl>

          <Divider role="presentation" />

          <FormControl sx={{ display: { sm: 'contents' } }}>
            <FormLabel>Kod pocztowy</FormLabel>
            <Input placeholder="kod pocztowy" defaultValue="" />
          </FormControl>

          <Divider role="presentation" />

          <Box>
            <FormLabel>O mnie</FormLabel>
            <FormHelperText>Napisz krótką notkę o sobie.</FormHelperText>
          </Box>
          <Box>
            <Textarea
              minRows={4}
              sx={{ mt: 1.5 }}
              placeholder="o mnie"
              defaultValue=""
            />
            <FormHelperText sx={{ mt: 0.75, fontSize: 'xs' }}>
              Pozostało 280 znaków
            </FormHelperText>
          </Box>

          <Divider role="presentation" />

          <Box
            sx={{
              gridColumn: '1/-1',
              justifySelf: 'flex-end',
              display: 'flex',
              gap: 1,
            }}
          >
            <Button size="sm">Zapisz</Button>
          </Box>
        </Box>
      </Tabs>
    </Sheet>
  );
}
