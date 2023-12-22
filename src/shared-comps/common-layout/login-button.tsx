// @mui
import { Theme, SxProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
// routes
// config
// import { PATH_AFTER_LOGIN } from 'src/config-global';
import {RouterLink} from "@/shared-comps/router-link";

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
};

export default function LoginButton({ sx }: Props) {
  return (
    <Button component={RouterLink} /*href={PATH_AFTER_LOGIN}*/ variant="outlined" sx={{ mr: 1, ...sx }}>
      Login
    </Button>
  );
}
