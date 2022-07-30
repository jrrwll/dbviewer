import React, {useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import {Button, ButtonGroup, Card} from '@blueprintjs/core'

export default function () {

    useEffect(() => {
        // Note that there must have a prettier way to set the styles definitely
        var elems = document.querySelectorAll('.Toolbar button');
        elems.forEach((elem, key) => {
            if (key > 0) {
                elem.classList.add('ms-1')
            }
        })
    })

    return (<ButtonGroup className="Toolbar mb-2">
        <Button icon="plus" intent="primary"/>
        <Button icon="trash" intent="danger"/>
        <Button icon="refresh" intent="warning"/>
        <Button icon="expand-all" intent="primary"/>
        <Button icon="edit" intent="primary"/>
    </ButtonGroup>)
}
