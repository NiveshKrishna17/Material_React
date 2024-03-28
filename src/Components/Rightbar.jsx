import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function Rightbar() {
    const friendsList = [
        { name: 'Henry Klassen', img: 'https://material-ui.com/static/images/avatar/1.jpg' },
        { name: 'Travis Head', img: 'https://material-ui.com/static/images/avatar/2.jpg' },
        { name: 'Mayank Agarwal', img: 'https://material-ui.com/static/images/avatar/3.jpg' },
        { name: 'Eiden Markram', img: '' },
        { name: 'Hardik Pandya', img: 'https://material-ui.com/static/images/avatar/4.jpg' },
        { name: 'Rohit Sharma', img: 'https://material-ui.com/static/images/avatar/5.jpg' },
        { name: 'Tim David', img: 'https://material-ui.com/static/images/avatar/6.jpg' },
        { name: 'Tilak Varma', img: 'https://material-ui.com/static/images/avatar/7.jpg' },
        { name: 'Jasprit Bumrah', img: 'https://material-ui.com/static/images/avatar/8.jpg' },
    ];

    const latestListItems = [
        { img: 'https://material-ui.com/static/images/image-list/breakfast.jpg' },
        { img: 'https://material-ui.com/static/images/image-list/burgers.jpg' },
        { img: 'https://material-ui.com/static/images/image-list/camera.jpg' },
        { img: 'https://material-ui.com/static/images/image-list/burgers.jpg' },
        { img: 'https://material-ui.com/static/images/image-list/camera.jpg' },
    ]

    const latestConvList = [
        {
            img: 'https://material-ui.com/static/images/avatar/3.jpg', pName: 'Brunch this weekend?', sName: 'Ali Connors', content: " — I'll be in your neighborhood doing errands this…"
        },
        { img: '/static/images/avatar/2.jpg', pName: 'Summer BBQ', sName: 'to Scott, Alex, Jennifer', content: " — Wish I could come, but I'm out of town this…" },
        { img: '/static/images/avatar/3.jpg', pName: 'Oui Oui', sName: 'Sandra Adams', content: " — Do you have Paris recommendations? Have you ever…" },
    ]
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            <Box position='fixed' width={300}>
                <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={7}>
                    {friendsList.map((list, id) => (
                        <Avatar key={id}
                            alt={list.name}
                            src={list.img}
                        />))}
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    {latestListItems.map((list, id) => (
                        <ImageListItem key={id}>
                            <img
                                src={list.img}
                                alt={id}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={2}>
                    Latest Conversations
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {latestConvList.map((list, id) => (
                        <ListItem alignItems="flex-start" key={id}>
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src={list.img} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={list.pName}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {list.sName}
                                        </Typography>
                                        {list.content}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}
