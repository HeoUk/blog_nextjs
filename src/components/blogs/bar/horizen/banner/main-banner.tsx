import { Box, Paper } from '@mui/material';
import {Banner} from "@/types/server/banner";

interface Props {
  banner: Banner;
}

export default function MainBanner(props: Props) {
  //
  const { banner } = props;

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
        <div
          dangerouslySetInnerHTML={{
            __html: banner ? banner.contents : 'DB  읽기 실패',
          }}
        ></div>
      </Paper>
    </Box>
  );
}
