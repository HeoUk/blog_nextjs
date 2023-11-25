import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardType} from '@/components/blogs/actions';

export const BlogListCards = ({card}: { card: CardType }) => {

export default async function PostCard({ card }: { card: CardType }) {
  //
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image='/static/images/cards/contemplative-reptile.jpg'
        title='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {card.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {card.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' href={`/blogs/entry/${card.id}`}>
          구독
        </Button>
        <Button size='small'>좋아요</Button>
      </CardActions>
    </Card>
  );
}
