import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const Rightbar = () => {
  return (
    <Box 
      flex={2} 
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block'
        }
      }}
    >
      <Box position='fixed' width={250}>
        <Typography 
          variant='h6'
          fontWeight={100}
          mt={2}
          mb={2}
        >
          Друзья в сети
        </Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Кирил Теребонькин" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Саша Теребонькин" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Лидия Теребонькина" src="https://mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Игнат Теребонькин" src="" />
          <Avatar alt="Слава Теребонькин" src="https://mui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Павел Теребонькин" src="https://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Артём Теребонькин" src="https://mui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Валерий Теребонькин" src="https://mui.com/static/images/avatar/7.jpg" />
          <Avatar alt="Антон Теребонькин" src="https://mui.com/static/images/avatar/8.jpg" />
        </AvatarGroup>
        <Typography 
          variant='h6'
          fontWeight={100}
          mt={2}
          mb={2}
        >
          Последние публикации
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
              alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography 
          variant='h6'
          fontWeight={100}
          mt={2}
          mb={2}
        >
          Последние разговоры
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Кирил Теребонькин" src="https://mui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Свободен в эти выходные?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Кирил Теребонькин
                  </Typography>
                  {" — я буду в твоем районе, выполняя поручения в этот..."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Саша Теребонькин" src="https://mui.com/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Шашлыки-машлыки"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Васе, Пете, Алёне
                  </Typography>
                  {" — Жаль, что я не могу приехать, нужно уехать по делам..."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Лидия Теребонькина" src="https://mui.com/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Да Да"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Лидия Теребонькина
                  </Typography>
                  {' — Какие достопримечательности есть у вас Подзадрыпино? Слышала вы стали столицей...'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar