import { Box, Stack, Skeleton } from '@mui/material'
import React, { useState } from 'react'
import { Post } from "../Components"

export default function Feed() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, [3000]);

    const feedItems = [
        { src: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', icon: 'A', name: 'Arjun Kumar', date: 'January 14, 2000' },
        { src: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', icon: 'B', name: 'Bala Kumar', date: 'February 9, 2024' },
        { src: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', icon: 'N', name: 'Nivesh Krishna', date: 'September 17,1999 ' },
        { src: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', icon: 'M', name: 'Mohammed Umar', date: 'July 19, 1998' },
        { src: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', icon: 'V', name: 'Vasanth Kumar', date: 'June 19, 2001' },
        { src: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', icon: 'S', name: 'Subha Shree', date: 'August 24, 2000' },
        { src: 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', icon: 'A', name: 'Anitha', date: 'April 12, 2000' }
    ]
    return (
        <Box
            flex={4} p={{ xs: 0, md: 2 }}
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            {
                loading ?
                    (
                        <Stack spacing={1}>
                            <Skeleton variant="text" height={100} />
                            <Skeleton variant="text" height={20} />
                            <Skeleton variant="text" height={20} />
                            <Skeleton variant="rectangular" height={300} />
                        </Stack>
                    )
                    :
                    (
                        <>
                            {feedItems.map((item) => (
                                <Post src={item.src} icon={item.icon} name={item.name} date={item.date} />
                            ))}
                        </>
                    )
            }
        </Box>
    )
}
