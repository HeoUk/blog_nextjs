import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import {Blog} from '@/types/server/blog';
import Image from 'next/image';
import Grid from '@mui/material/Grid/Grid';
import {Box, Button, Typography} from '@mui/material';

interface Props {
  tag: string;
  blogs: Blog[];
}

export default function RecommendBlog(props: Props) {
  //
  const { tag, blogs } = props;

  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      {blogs.map((blog) => (
        <Grid container>
          <Grid item xs={4}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Image
                    width={20}
                    height={20}
                    alt={''}
                    src={blog ? blog.image64 : ''}
                  ></Image>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={blog.blogName} secondary={blog.userName} />
            </ListItem>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ padding: 2 }}>
              <Typography
                sx={{ mt: 2, mb: 1 }}
                variant='subtitle2'
                component='div'
              >
                {blog.blogIntroduce}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ padding: 2 }}>
              <Button>
                {true ? <AddAlertOutlinedIcon /> : <AddAlertIcon />}
              </Button>
              <Button variant='contained'>Subscribe</Button>
            </Box>
          </Grid>
        </Grid>
      ))}
      {/* 
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Work' secondary='Jan 7, 2014' />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Vacation' secondary='July 20, 2014' />
      </ListItem> */}
    </List>
  );
}
