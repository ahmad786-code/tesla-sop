import React, {FC, useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material'

interface Props  {
    maxValue: number
    currentValue: number

    updatedQuality: (newValue: number) => void
}

export const ItemCounter:FC<Props> = ({maxValue, currentValue, updatedQuality}) => {

    const addAndSubtract = (value: number) => {
        if(value === -1) {
            if(currentValue === 1) return
            return updatedQuality(currentValue - 1)
        }

        if(currentValue >= maxValue) return
        updatedQuality(currentValue + 1)
    }

    return (
        <Box display="flex">
            <IconButton onClick={() => addAndSubtract(-1)}>
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}>{currentValue}</Typography>
            <IconButton  onClick={() => addAndSubtract(+1)}>
                <AddCircleOutline />
            </IconButton>
        </Box>
    )
}
