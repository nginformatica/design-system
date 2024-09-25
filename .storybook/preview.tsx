import React from 'react'
import { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { ThemeProviderFlipper, muiThemeOptions, theme } from 'flipper-ui/theme'

const preview: Preview = {
    parameters: {
        options: {
            storySort: {
                order: [
                    'Comece por aqui',
                    ['Bem-vindo!', 'Introdução'],
                    'Design',
                    [
                        'Cores',
                        ['Guia de Uso', 'Sistema de cores', 'Funções das cores'],
                        'Ícones',
                        'Tipografia'
                    ],
                    'Web',
                    ['Introdução', 'Guia de Uso'],
                    'Mobile',
                    ['Introdução', 'Guia de Uso']
                ]
            }
        },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        decorators: [
            Story => (
                <ThemeProvider theme={theme}>
                    <ThemeProviderFlipper options={muiThemeOptions}>
                        <Story />
                    </ThemeProviderFlipper>
                </ThemeProvider>
            )
        ]
    }
}

export default preview
