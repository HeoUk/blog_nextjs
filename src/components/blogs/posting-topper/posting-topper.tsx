import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { RouterLink } from '@/routes/components';
import { paths } from '@/routes/paths';
import Iconify from '@/shared-comps/iconify';
import IconButton from '@mui/material/IconButton';

export default function postingTopper() {
  return (
    <Grid container direction='row' sx={{marginTop: 3, marginBottom: 3}}>
      <Grid container xs={6} md={6}>
        <Grid>
          <Button
            component={RouterLink}
            href={paths.blogs.myBlog}
            color='inherit'
            startIcon={<Iconify icon='eva:arrow-ios-back-fill' />}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <Grid container xs={6} md={6} direction='row-reverse'>
        <Grid>
        <Button
            color='inherit'
            size='medium'
            variant='contained'
            target='_blank'
            rel='noopener'
            href={paths.minimalUI}
            sx={{
              color: 'gray.800',
              bgcolor: 'black.800',
            }}
            endIcon={<Iconify icon='eva:arrow-ios-downward-outline' />}
          >
            New
          </Button>
        </Grid>
        <Grid>
          <IconButton color='inherit' aria-label='modify posting'>
            <Iconify color='black' icon='solar:pen-bold' />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton color='inherit' aria-label='share posting'>
            <Iconify color='black' icon='lucide:share' />
          </IconButton>
        </Grid>
        <Grid>
          <Button
            component={RouterLink}
            href={paths.blogs.myBlog}
            color='inherit'
            endIcon={<Iconify icon='eva:arrow-ios-forward-outline' />}
          >
            Next
          </Button>
        </Grid>
        <Grid>
          <Button
            component={RouterLink}
            href={paths.blogs.myBlog}
            color='inherit'
            startIcon={<Iconify icon='eva:arrow-ios-back-fill' />}
          >
            Prev
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
