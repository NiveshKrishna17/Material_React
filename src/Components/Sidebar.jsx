import { Home, Article, Group, Storefront, Person, Settings, AccountBox, ModeNight } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

export default function Sidebar() {
    const listItems = [
        { icon: <Home />, ref: '#home', textTag: 'Homepage' },
        { icon: <Article />, ref: '#simple-list', textTag: 'Pages' },
        { icon: <Group />, ref: '#simple-list', textTag: 'Groups' },
        { icon: <Storefront />, ref: '#simple-list', textTag: 'Market Place' },
        { icon: <Person />, ref: '#simple-list', textTag: 'Friends' },
        { icon: <Settings />, ref: '#simple-list', textTag: 'Settings' },
        { icon: <AccountBox />, ref: '#simple-list', textTag: 'Profile' },
        { icon: <ModeNight />, ref: '#simple-list', textTag: 'Theme' },
    ]
    return (
        <Box
            flex={1}
            p={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            <List>
                {listItems.map((list, id) => {
                    return (
                        <ListItem disablePadding key={id}>
                            <ListItemButton component="a" href={list.ref}>
                                <ListItemIcon>
                                    {list.icon}
                                </ListItemIcon>
                                {
                                    list.textTag === 'Theme' ? <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')} /> : <ListItemText primary={list.textTag} />
                                }

                            </ListItemButton>
                        </ListItem>
                    )
                })}

            </List>
        </Box>
    )
}
