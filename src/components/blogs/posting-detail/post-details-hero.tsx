// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import SpeedDial from '@mui/material/SpeedDial';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import SpeedDialAction from '@mui/material/SpeedDialAction';
// _mock
import { _socials } from '@/_mock/_others';
// hooks
import { useResponsive } from '@/hooks/use-responsive';
// utils
import { fDate } from '@/utils/format-time';
// theme
import { bgGradient } from '@/theme/css';
// components
import Iconify from '@/components/blogs/iconify';
// types
import { Posting } from '@/types/client/posting';

// ----------------------------------------------------------------------

type Props = {
  title: string;
  image64: string;
  registerDate: string;
  userName: string;
  userImage: string;
};

export default function PostDetailsHero({
  title,
  image64,
  registerDate,
  userName,
  userImage,
}: Props) {
  const theme = useTheme();

  const smUp = useResponsive('up', 'sm');

  return (
    <Box
      sx={{
        height: 480,
        overflow: 'hidden',
        ...bgGradient({
          imgUrl: image64,
          startColor: `${alpha(theme.palette.grey[900], 0.64)} 0%`,
          endColor: `${alpha(theme.palette.grey[900], 0.64)} 100%`,
        }),
      }}
    >
      <Container sx={{ height: 1, position: 'relative' }}>
        <Typography
          variant='h3'
          component='h1'
          sx={{
            zIndex: 9,
            color: 'common.white',
            position: 'absolute',
            maxWidth: 480,
            pt: { xs: 2, md: 8 },
          }}
        >
          {title}
        </Typography>

        <Stack
          sx={{
            left: 0,
            width: 1,
            bottom: 0,
            position: 'absolute',
          }}
        >
          {true && true && (
            <Stack
              direction='row'
              alignItems='center'
              sx={{
                px: { xs: 2, md: 3 },
                pb: { xs: 3, md: 8 },
              }}
            >
              <Avatar
                alt={userName}
                src={userImage}
                sx={{ width: 64, height: 64, mr: 2 }}
              />

              <ListItemText
                sx={{ color: 'common.white' }}
                primary={userName}
                secondary={fDate(registerDate)}
                primaryTypographyProps={{ typography: 'subtitle1', mb: 0.5 }}
                secondaryTypographyProps={{
                  color: 'inherit',
                  sx: { opacity: 0.64 },
                }}
              />
            </Stack>
          )}

          <SpeedDial
            direction={smUp ? 'left' : 'up'}
            ariaLabel='Share post'
            icon={<Iconify icon='solar:share-bold' />}
            FabProps={{ size: 'medium' }}
            sx={{
              position: 'absolute',
              bottom: { xs: 32, md: 64 },
              right: { xs: 16, md: 24 },
            }}
          >
            {_socials.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={
                  <Iconify icon={action.icon} sx={{ color: action.color }} />
                }
                tooltipTitle={action.name}
                tooltipPlacement='top'
                FabProps={{ color: 'default' }}
              />
            ))}
          </SpeedDial>
        </Stack>
      </Container>
    </Box>
  );
}
