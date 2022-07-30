import React, {useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import ToolbarArea from '../../components/common/ToolbarArea'
import DataSourceTreeArea from '../../components/common/DataSourceTreeArea'
import {Card} from '@blueprintjs/core'
import RedisTableArea from '../../components/redis/RedisTableArea'

export default function () {

    useEffect(() => {

    })

    return (
        <Container>
            <Row>
                <Col xs={3}>
                    <Card>
                        <ToolbarArea/>
                        <DataSourceTreeArea/>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <RedisTableArea/>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
