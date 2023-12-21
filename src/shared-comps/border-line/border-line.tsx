import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export const BorderLine = () => {
  //
  const theme = useTheme();


  //
  return (
    <Box sx={{ padding: '0 16px' }}>
      <Box
        sx={{
          borderTop: `1px dashed ${theme.palette.divider}`
        }}
      />
    </Box>
  )
}
