'use client'
import { Button } from '@nextui-org/button'
import React, { useRef, useState } from 'react'
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TOnInitPresetFn, TRunAnimationParams } from 'react-canvas-confetti/dist/types';

type Props = {
    number: number | string
}

const Episode = (props: Props) => {
    const [variant, setVariant] = useState<'faded' | 'shadow'>('faded')
    const controller = useRef<any>();

    const onInitHandler = ({ conductor }: any) => {
        controller.current = conductor;
    };

    const handleClick = () => {
        setVariant(variant === 'shadow' ? 'faded' : 'shadow')
        controller.current.shoot();

    }

    return (
        <div>
            <Fireworks onInit={onInitHandler} />
            <Button color='primary' radius='none' variant={variant} onClick={handleClick}>{props.number}</Button>
        </div>
    )
}

export default Episode