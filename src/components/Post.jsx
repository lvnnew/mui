import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Post = () => {
  return (
    <Box>
        <Card sx={{margin: 5}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                    B
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Вася Пупкин"
                subheader="Сентябрь 14, 2021"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://i.ytimg.com/vi/TraQdt95jyE/maxresdefault.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus in nulla faucibus, efficitur elit pellentesque, pretium neque. 
                    Maecenas interdum congue ex, eget euismod turpis tincidunt eleifend. 
                    Nullam imperdiet blandit diam, sed bibendum orci dapibus ut. 
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{color: 'red'}} />} />
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    </Box>
  )
}

export default Post