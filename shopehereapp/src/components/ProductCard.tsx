import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { ProductCardInterface } from '../types/Common'

export const ProductCard = ({ name, img, color, price, onClick }: ProductCardInterface) => {
    return (
        <Card
            sx={{
                
                maxWidth: 300,
                borderRadius: 3,
                boxShadow: 1,
                cursor: onClick ? "pointer" : "default",
            }}
            onClick={onClick}

        >
            <CardMedia
                component={'img'}
                image={img}
                alt={name}
                height={200}
                sx={{ objectFit: 'cover' }}
                loading='lazy'
            >
            </CardMedia>
            <CardContent sx={{p:2,
                boxSizing:'border-box',}}>
                <Typography variant='subtitle1' fontWeight={'bold'} textAlign={'center'}>
                    {name}
                </Typography>
            <hr style={{backgroundColor:'#ccc',height:'0.5px',border:'none',marginTop:'10px',marginBottom:'10px'}}/>
            <Box sx={{ display: "flex", gap: 1,alignItems:'center' ,justifyContent:'space-between'}}>
                 <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    textAlign="left"
                >
                    ₹{price}
                </Typography> 
                <Box sx={{ display: "flex", gap: 1 }}>
                    {color?.length>0&&color?.map((color, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                width: 14,
                                height: 14,
                                borderRadius: "50%",
                                backgroundColor: color,
                                border: "1px solid #ccc",
                                boxShadow:'2'
                            }}
                        />
                    ))}
                </Box>
                  </Box>
            </CardContent>
        </Card>
    )
}
