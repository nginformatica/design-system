import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    stories: [
        '../src/**/**/*.mdx',
        '../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    features: {
        storyStoreV7: true
    },
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-styling-webpack'
    ],
    docs: {
        autodocs: true
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
}

export default config
