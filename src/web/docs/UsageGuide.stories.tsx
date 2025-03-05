import React from 'react'
import DonutChart from 'amazing-react-charts/core/donut-chart/DonutChart'
import { Button } from 'flipper-ui'
import { IconPhotoCamera } from 'flipper-ui/icons/mui'
import type { Meta } from '@storybook/react'
import { theme } from 'flipper-ui/theme'

const { primary } = theme.colors

const meta: Meta<typeof Button> = {
    title: 'Web/Guia de uso',
    component: Button
}

export default meta

export const donutChart = {
    render: () => {
        return (
            <DonutChart
                title='Donut Chart'
                colors={['red', 'orange', 'yellow', 'green']}
                donutRadius={['58%', '70%']}
                resultFormatType='percent'
                center={['50%', '50%']}
                legendPosition='outside'
                tooltip={{
                    label: 'Criticidade',
                    result: 'Total de SSs'
                }}
                toolboxTooltip={{ saveAsImage: { title: 'Save as Image' } }}
                data={[
                    { name: 'Emergencial', value: 120 },
                    { name: 'Alta', value: 234 },
                    { name: 'Média', value: 500 },
                    { name: 'Baixa', value: 440 }
                ]}
            />
        )
    }
}

export const flipperButton = {
    render: () => {
        return (
            <Button color='primary' variant='outlined'>
                Este é um botão!
            </Button>
        )
    },
    parameters: {
        layout: 'centered'
    }
}

export const flipperIcon = {
    render: () => {
        return <IconPhotoCamera htmlColor={primary.main} />
    },
    parameters: {
        layout: 'centered'
    }
}
