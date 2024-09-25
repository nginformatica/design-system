import React from 'react'
import {
    ColorsCard,
    CardHeader,
    HeaderColor,
    ContentBold,
    CardColor,
    Container,
    isLightColor,
    ContainerContent,
    ContainerTitle
} from './styles'
import { Content, Flex, FlexBetween, Wrapper } from '../../commonStyles'
import { theme } from 'flipper-ui/theme'

const { feedback, criticality, primary, secondary, action, priority } =
    theme.colors

export const ColorRoles = () => {
    return (
        <Wrapper>
            <ContainerTitle>COLOR ROLES</ContainerTitle>
            <hr />
            <ContainerContent>Descrição</ContainerContent>

            <Container name='color-roles'>
                <ColorsCard key='action'>
                    <CardHeader background={action.confirm}>
                        <HeaderColor>Action</HeaderColor>
                        <FlexBetween>
                            <ContentBold>confirm</ContentBold>
                            <Content>green[600]</Content>
                        </FlexBetween>
                    </CardHeader>

                    <CardColor
                        background={action.cancel}
                        light={isLightColor(action.cancel)}>
                        <ContentBold>cancel</ContentBold>
                        <Content>deepOrange[600]</Content>
                    </CardColor>

                    <CardColor
                        background={action.confirm}
                        light={isLightColor(action.confirm)}>
                        <ContentBold>confirm</ContentBold>
                        <Content>green[600]</Content>
                    </CardColor>
                </ColorsCard>

                <ColorsCard key='primary'>
                    <CardHeader background={primary.main}>
                        <HeaderColor>Primary</HeaderColor>
                        <FlexBetween>
                            <ContentBold>main</ContentBold>
                            <Content>darkBlue[600]</Content>
                        </FlexBetween>
                    </CardHeader>

                    <CardColor
                        background={primary.light}
                        light={isLightColor(primary.light)}>
                        <ContentBold>light</ContentBold>
                        <Content>darkBlue[300]</Content>
                    </CardColor>

                    <CardColor
                        background={primary.main}
                        light={isLightColor(primary.main)}>
                        <ContentBold>main</ContentBold>
                        <Content>darkBlue[600]</Content>
                    </CardColor>

                    <CardColor
                        background={primary.dark}
                        light={isLightColor(primary.dark)}>
                        <ContentBold>dark</ContentBold>
                        <Content>darkBlue[900]</Content>
                    </CardColor>
                </ColorsCard>

                <ColorsCard key='secondary'>
                    <CardHeader background={secondary.main}>
                        <HeaderColor>Secondary</HeaderColor>
                        <FlexBetween>
                            <ContentBold>main</ContentBold>
                            <Content>green[600]</Content>
                        </FlexBetween>
                    </CardHeader>

                    <CardColor
                        background={secondary.light}
                        light={isLightColor(secondary.light)}>
                        <ContentBold>light</ContentBold>
                        <Content>green[300]</Content>
                    </CardColor>

                    <CardColor
                        background={secondary.main}
                        light={isLightColor(secondary.main)}>
                        <ContentBold>main</ContentBold>
                        <Content>green[600]</Content>
                    </CardColor>

                    <CardColor
                        background={secondary.dark}
                        light={isLightColor(secondary.dark)}>
                        <ContentBold>dark</ContentBold>
                        <Content>green[900]</Content>
                    </CardColor>
                </ColorsCard>

                <ColorsCard key='criticality'>
                    <CardHeader background={criticality.low}>
                        <HeaderColor>Criticality</HeaderColor>
                        <FlexBetween>
                            <ContentBold>low</ContentBold>
                            <Content>lightGreen[400]</Content>
                        </FlexBetween>
                    </CardHeader>

                    <CardColor
                        background={criticality.high}
                        light={isLightColor(criticality.high)}>
                        <ContentBold>high</ContentBold>
                        <Content>orange[600]</Content>
                    </CardColor>

                    <CardColor
                        background={criticality.medium}
                        light={isLightColor(criticality.medium)}>
                        <ContentBold>medium</ContentBold>
                        <Content>amber[500]</Content>
                    </CardColor>

                    <CardColor
                        background={criticality.low}
                        light={isLightColor(criticality.low)}>
                        <ContentBold>low</ContentBold>
                        <Content>lightGreen[400]</Content>
                    </CardColor>
                </ColorsCard>

                <ColorsCard key='feedback'>
                    <CardHeader background={feedback.info}>
                        <HeaderColor>Feedback</HeaderColor>
                        <FlexBetween>
                            <ContentBold>info</ContentBold>
                            <Content>blue[600]</Content>
                        </FlexBetween>
                    </CardHeader>

                    <CardColor
                        background={feedback.danger}
                        light={isLightColor(feedback.danger)}>
                        <ContentBold>danger</ContentBold>
                        <Content>deepOrange[600]</Content>
                    </CardColor>

                    <CardColor
                        background={feedback.warning}
                        light={isLightColor(feedback.warning)}>
                        <ContentBold>warning</ContentBold>
                        <Content>orange[600]</Content>
                    </CardColor>

                    <CardColor
                        background={feedback.success}
                        light={isLightColor(feedback.success)}>
                        <ContentBold>success</ContentBold>
                        <Content>green[400]</Content>
                    </CardColor>

                    <CardColor
                        background={feedback.info}
                        light={isLightColor(feedback.info)}>
                        <ContentBold>info</ContentBold>
                        <Content>blue[600]</Content>
                    </CardColor>
                </ColorsCard>

                <ColorsCard key='priority-main'>
                    <CardHeader background={priority.main.medium}>
                        <Flex>
                            <HeaderColor>Priority</HeaderColor>
                            <ContentBold>.main</ContentBold>
                        </Flex>
                        <FlexBetween>
                            <ContentBold>medium</ContentBold>
                            <Content>amber[500]</Content>
                        </FlexBetween>
                    </CardHeader>

                    <CardColor
                        background={priority.main.minimal}
                        light={isLightColor(priority.main.minimal)}>
                        <ContentBold>minimal</ContentBold>
                        <Content>blue[300]</Content>
                    </CardColor>

                    <CardColor
                        background={priority.main.low}
                        light={isLightColor(priority.main.low)}>
                        <ContentBold>low</ContentBold>
                        <Content>lightGreen[400]</Content>
                    </CardColor>

                    <CardColor
                        background={priority.main.medium}
                        light={isLightColor(priority.main.medium)}>
                        <ContentBold>medium</ContentBold>
                        <Content>amber[500]</Content>
                    </CardColor>

                    <CardColor
                        background={priority.main.high}
                        light={isLightColor(priority.main.high)}>
                        <ContentBold>high</ContentBold>
                        <Content>orange[600]</Content>
                    </CardColor>

                    <CardColor
                        background={priority.main.critical}
                        light={isLightColor(priority.main.critical)}>
                        <ContentBold>critical</ContentBold>
                        <Content>deepOrange[600]</Content>
                    </CardColor>
                </ColorsCard>

                <ColorsCard key='priority-light'>
                    <CardHeader light background={priority.light.medium}>
                        <Flex>
                            <HeaderColor>Priority</HeaderColor>
                            <ContentBold>.light</ContentBold>
                        </Flex>
                        <FlexBetween>
                            <ContentBold>medium</ContentBold>
                            <Content>amber[50]</Content>
                        </FlexBetween>
                    </CardHeader>

                    <CardColor
                        background={priority.light.minimal}
                        light={isLightColor(priority.light.minimal)}>
                        <ContentBold>minimal</ContentBold>
                        <Content>blue[50]</Content>
                    </CardColor>

                    <CardColor
                        background={priority.light.low}
                        light={isLightColor(priority.light.low)}>
                        <ContentBold>low</ContentBold>
                        <Content>lightGreen[50]</Content>
                    </CardColor>

                    <CardColor
                        background={priority.light.medium}
                        light={isLightColor(priority.light.medium)}>
                        <ContentBold>medium</ContentBold>
                        <Content>amber[50]</Content>
                    </CardColor>

                    <CardColor
                        background={priority.light.high}
                        light={isLightColor(priority.light.high)}>
                        <ContentBold>high</ContentBold>
                        <Content>orange[50]</Content>
                    </CardColor>

                    <CardColor
                        background={priority.light.critical}
                        light={isLightColor(priority.light.critical)}>
                        <ContentBold>critical</ContentBold>
                        <Content>deepOrange[50]</Content>
                    </CardColor>
                </ColorsCard>
            </Container>
        </Wrapper>
    )
}
