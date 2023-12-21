'use client'
import MDEditor from '@uiw/react-md-editor';
import {Controller, useForm} from 'react-hook-form';
import {Posting} from '@/types/blog';
import {Box, Stack, TextField} from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import {IconText} from "@/shared/icon-text/icon-text";
import Button from "@mui/material/Button";
import {BorderLine} from "@/shared/border-line/border-line";


export const RegisterPosting = () => {
  // default
  const {
    handleSubmit,
    // setValue,
    // getValues,
    // reset,
    // watch,
    formState: {errors},
    control,
  } = useForm<Posting>();

  // handle
  const onRegister = (data: Posting) => {
    console.log('register Data : ', data);
  }

  //
  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <Box
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          // gap: '20px',
          // width: '100%',
          padding: '2em',
        }}
      >
        <Grid
          alignItems='center'
          justifyItems='center'
          container
          spacing={2}
        >
          <Grid item xs={12} md={12} position={'relative'}>
            <Stack position={'absolute'} right={0}>
              <Stack position={'fixed'} sx={{transform: 'translate(-80%, -50%)'}}>
                <Button variant='contained' color='primary' type={'submit'}>등록</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <IconText depth={0} icon={'ic:round-title'} text={'제목'} required/>
          </Grid>
          <Grid item xs={12} md={12}>
            <Controller
              render={({field, fieldState: {error}}) => (
                <TextField
                  {...field}
                  fullWidth
                  size={'small'}
                  error={!!error}
                  helperText={!!error && error.message}
                  placeholder={'제목을 입력해 주세요'}
                />
              )}
              name={'title'}
              control={control}
              rules={{required: '제목을 입력해 주세요!'}}
            />
          </Grid>

          <BorderLine/>

          <Grid item xs={12} md={12}>
            <IconText depth={0} icon={'fluent:slide-content-24-regular'} text={'내용'} required/>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className='container'>
              <Controller
                render={({field}) => (
                  <MDEditor
                    {...field}
                    height={'60vh'}
                  />
                )}
                name={'contents'}
                control={control}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </form>

  )
}