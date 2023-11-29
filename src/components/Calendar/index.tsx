import React from 'react'
import { Container } from './styles'

import { Calendar as CalendarCustom } from 'react-native-calendars';

export default function Calendar() {
    return (

    <CalendarCustom 
        style={{
            width: 350,
        }}
    />
    )
}