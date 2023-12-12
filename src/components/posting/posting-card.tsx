import Avatar from '@mui/material/Avatar/Avatar';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar/ListItemAvatar';
import Image from 'next/image';

interface Props {
  postingImage: string;
  blogImage: string;
  title: string;
}

export default function PostingCard(props: Props) {
  //
  const { postingImage, blogImage, title } = props;

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component='img'
        src={postingImage}
        sx={{ height: 150 }}
        title='postingImage'
      />
      <CardContent sx={{ maxHeight: 50 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image width={35} height={35} alt={''} src={blogImage}></Image>
            </Avatar>
          </ListItemAvatar>
          <ListItemText content='p' sx={{ fontSize: 9 }} primary={title} />
        </ListItem>
      </CardContent>
    </Card>
  );
}
