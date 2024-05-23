'use client'
import { Button } from '@nextui-org/button'
import React, { useState } from 'react'

type Props = {
    number: number | string
}

const Episode = (props: Props) => {
    const [variant, setVariant] = useState<'faded' | 'shadow'>('faded')

    const handleClick = () => {
        setVariant(variant === 'shadow' ? 'faded' : 'shadow')
    }

    return (
        <Button color='primary' variant={variant} onClick={handleClick}>{props.number}</Button>
    )
}

export default Episode