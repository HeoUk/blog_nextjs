import Box from '@mui/material/Box/Box';
import Divider from '@mui/material/Divider/Divider';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';

interface Props {
  tag: string;
}

export default function RecommendBlogInfoBar(props: Props) {
  //
  const { tag } = props;

  return (
    <Box>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
        }}
        component='nav'
        aria-label='mailbox folders'
      >
        <ListItem button>
          <p>
            {tag} {`(${3})`}
          </p>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
}
