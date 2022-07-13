import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
})

const Add = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip 
        onClick={(e) => setOpen(true)}
        title="Добавить"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: {
            xs: 'calc(50% - 25px)',
            md: 30
          }
        }}
      >
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
          width={400} 
          height={280} 
          bgcolor={'background.default'} 
          color={'text.primary'}
          p={3} borderRadius={5}
        >
          <Typography variant='h6' color='gray' textAlign='center'>
            Новый пост
          </Typography>
          <UserBox>
            <Avatar
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format'
              alt=''
            />
            <Typography fontWeight={500} variant='span'> Вася Пупкин </Typography>
          </UserBox>
          <TextField
            sx={{
              width: '100%'
            }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Сообщение..."
            variant="standard"
          />
          <Stack 
            direction='row' 
            gap={1}
            mt={2}
            mb={3}
          >
            <EmojiEmotionsIcon color='primary'/>
            <ImageIcon color='secondary'/>
            <VideoCameraBackIcon color='success'/>
            <PersonAddIcon color='error'/>
          </Stack>
          <ButtonGroup 
            variant="contained" 
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Разместить</Button>
            <Button sx={{
              width: '100px'
            }}>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add