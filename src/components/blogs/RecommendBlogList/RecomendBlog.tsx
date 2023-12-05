import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Blog } from '../api/model/Blog';
import Image from 'next/image';

interface Props {
  blogs: Blog[];
}

export default function RecommendBlog(props: Props) {
  //
  const { blogs } = props;

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {blogs.map((blog) => (
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
