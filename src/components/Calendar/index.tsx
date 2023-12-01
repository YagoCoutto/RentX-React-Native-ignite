import React, { useState } from 'react'
import { Container } from './styles'

import { Calendar as CalendarCustom, LocaleConfig } from 'react-native-calendars';

import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

export default function Calendar() {
    const theme = useTheme()

    LocaleConfig.locales['pt-br'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ],
        monthNamesShort: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez'
        ],
        dayNames: [
            'Domingo',
            'Segunda',
            'Terça',
            'Quarta',
            'Quinta',
            'Sexta',
            'Sabado'            
        ],
        dayNamesShort: ['DOM','SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
        today: 'Hoje'
    };
    LocaleConfig.defaultLocale = 'pt-br';


    return (

        <CalendarCustom

            firstDay={1}

            renderArrow={direction =>
                <Feather
                    name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
                    size={24}
                    color='black'
                />
            }

            style={{
                width: 420,
            }}

            theme={{
                textDayFontFamily: theme.fonts.ArchivoSemiBold,
                textDayHeaderFontFamily: theme.fonts.ArchivoMedium,
                textDayHeaderFontSize: 10,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}

            headerStyle={{
                backgroundColor: theme.colors.backgroundSecondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.grayLight,
                paddingBottom: 5,
                marginBottom: 10,
            }}
        />

    )
}