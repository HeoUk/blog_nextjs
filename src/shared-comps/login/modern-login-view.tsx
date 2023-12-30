'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
// routes
import { paths } from '@/routes/paths';
import { RouterLink } from '@/routes/components';
// hooks
import { useBoolean } from '@/hooks/use-boolean';
// components
import Iconify from '@/shared-comps/iconify';
import FormProvider, { RHFTextField } from '@/components/blogs/hook-form';
import { GoogleSignInButton } from '../auth-button/auth-buttons';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// ----------------------------------------------------------------------

export default function ModernLoginView() {
  const password = useBoolean();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const signInResponse = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInResponse && !signInResponse.error) {
        //Redirect to homepage (/timeline)
        router.push('/blogs');
      } else {
        console.log('Error: ', signInResponse);
        setError('Your Email or Password is wrong!');
      }
    } catch (error) {
      console.error(error);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }}>
      <Typography variant='h4'>Welcome to YALLOO</Typography>

      <Stack direction='row' spacing={0.5}>
        <Typography variant='body2'>Join Us?</Typography>

        <Link component={RouterLink} href={'/'} variant='subtitle2'>
          Create an account
        </Link>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      <RHFTextField name='email' label='Email address' />

      <RHFTextField
        name='password'
        label='Password'
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={password.onToggle} edge='end'>
                <Iconify
                  icon={
                    password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Link
        component={RouterLink}
        href={'/'}
        variant='body2'
        color='inherit'
        underline='always'
        sx={{ alignSelf: 'flex-end' }}
      >
        Forgot password?
      </Link>

      <LoadingButton
        fullWidth
        color='inherit'
        size='large'
        type='submit'
        variant='contained'
        loading={isSubmitting}
        endIcon={<Iconify icon='eva:arrow-ios-forward-fill' />}
        sx={{ justifyContent: 'space-between', pl: 2, pr: 1.5 }}
      >
        Login
      </LoadingButton>
      <GoogleSignInButton />
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}
