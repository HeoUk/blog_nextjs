import { Box, Paper } from '@mui/material';
import { Banner } from './api/model/Banner';
import { findAllBanners } from './api/action';

export default async function MainBanner() {
  //
  const banners: Banner[] = await findAllBanners();
  const randomNumber = Math.floor(Math.random() * (banners.length + 1));
  const banner = banners[randomNumber];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mt: 1,
          width: '100%',
          height: 'fit',
          padding: '15px',
          backgroundColor: 'lightGrey',
        },
      }}
    >
      <Paper>
        <div dangerouslySetInnerHTML={{ __html: banner.contents }}></div>
      </Paper>
    </Box>
  );
}
