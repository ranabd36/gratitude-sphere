import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const { bottom } = require('@popperjs/core')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class', '[data-mode="dark"]'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    important: true,
    theme: {
        screens: {
            xs: "100%",
            sm: '540px',
            md: '720px	',
            lg: '960px',
            xl: '1140px',
            '2xl': '1320px',
        },
        container: {
            padding: '0.625rem',
        },
        fontFamily: {
            primary: ['IBM Plex Sans', 'sans-serif'],
        },
        extend: {
            fontSize: {
                '10': '0.625rem',
                '11': '0.688rem',
                '13': '0.813rem',
                'base': '0.875rem',
                '15': '0.938rem',
                '16': '1rem',
                '17': '1.063rem',
                '19': '1.188rem',
                '21': '1.313rem',
                '22': '1.375rem',
            },
            colors: {
                violet: {
                    50: '#D0D1ED',
                    100: '#f8f9fa',
                    200: '#A0A3DC',
                    300: '#8084D0',
                    400: '#6165C4',
                    500: '#5156be',
                    600: '#4A4EAD',
                    700: '#42469B',
                    800: '#343779',
                    900: '#2C2F68',
                },
                slate: {
                    50: '#fbfaff',
                },
                gray: {
                    50: '#E6E6EB',
                    100: '#D9DAE0',
                    200: '#C0C2CB',
                    300: '#A7A9B6',
                    400: '#8D91A2',
                    500: '#74788D',
                    600: '#313533',
                    700: '#313533',
                    800: '#2A2C33',
                    900: '#202126',
                    950: '#545a6d',
                },
                green: {
                    50: '#CAEDDF',
                    100: '#B2E4D0',
                    200: '#8BD7B8',
                    300: '#64C9A0',
                    400: '#3DBC89',
                    500: '#2ab57d',
                    600: '#229466',
                    700: '#1F845B',
                    800: '#176344',
                    900: '#0F422D',
                },
                sky: {
                    50: '#D2E9FB',
                    100: '#BEDFF9',
                    200: '#9DCEF6',
                    300: '#7CBEF3',
                    400: '#5BAEF0',
                    500: '#4BA6EF',
                    600: '#4497D9',
                    700: '#3D88C4',
                    800: '#306A98',
                    900: '#295B82',
                },
                yellow: {
                    50: '#FFF0D4',
                    100: '#FFE2B1',
                    200: '#FFD692',
                    300: '#FFD082',
                    400: '#FFC563',
                    500: '#ffbf53',
                    600: '#E8AE4B',
                    700: '#D19C44',
                    800: '#B98B3C',
                    900: '#A27A35',
                },
                red: {
                    50: '#FEDCDB',
                    100: '#FEC6C4',
                    200: '#FEB8B6',
                    300: '#FE8D8A',
                    400: '#FD706D',
                    500: '#FD625E',
                    600: '#E65955',
                    700: '#CF504D',
                    800: '#B84744',
                    900: '#A13E3C',
                },
                neutral: {
                    50: '#DCDCDC',
                    100: '#CCCCCC',
                    200: '#B3B3B3',
                    300: '#999999',
                    400: '#808080',
                    500: '#737373',
                    600: '#545454',
                    700: '#3F3F3F',
                    800: '#2A2A2A',
                    900: '#1F1F1F',
                },
                zinc: {
                    50: '#B2B3B2',
                    100: '#ADB5BD',
                    200: '#919392',
                    300: '#858786',
                    400: '#666867',
                    500: '#525654',
                    600: '#3F4341',
                    700: '#313533',
                    800: '#2c302e',
                    900: '#242726',
                },
            },
        },
    },

    plugins: [
        forms,
        plugin(function ({ addBase, theme }) {
            addBase({
                'h1': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.medium'), fontFamily: theme('fontFamily.primary'), lineHeight: '2.7rem', },
                'h2': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.medium'), fontFamily: theme('fontFamily.primary'), lineHeight: '2.16rem', },
                'h3': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.medium'), fontFamily: theme('fontFamily.primary'), lineHeight: '1.89rem', },
                'h4': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.medium'), fontFamily: theme('fontFamily.primary'), lineHeight: '21px', },
                'h5': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.medium'), fontFamily: theme('fontFamily.primary'), lineHeight: '1.35rem', },
                'h6': { fontSize: theme('fontSize.base'), fontWeight: theme('fontWeight.medium'), fontFamily: theme('fontFamily.primary'), lineHeight: '1.08rem', },
                'p': { lineHeight: '1.35rem' },
                'li': { lineHeight: '21.6px' },
                'span': { lineHeight: '14px' },
                'html': { fontSize: '14px' }
            })
        }),
        plugin(function ({ addComponents, theme }) {
            addComponents({
                '.btn': {
                    padding: '0.4375rem 0.75rem',
                    borderRadius: '0.30rem',
                    fontWeight: theme('fontWeight.normal'),
                    fontSize: '0.875rem',
                    display: 'inline-block',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    textAlign: 'center',
                    transition: 'all 0.5s ease',
                },
                '.card': {
                    borderRadius: '0.30rem',
                    border: '1px',
                    borderStyle: 'solid',
                    borderColor: '#e9e9ef',
                    marginBottom: theme('margin.6')
                },
                '.card-body': {
                    padding: theme('padding.5'),
                }
            })
        })
    ],
};
