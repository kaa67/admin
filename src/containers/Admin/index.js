import * as React from 'react';
import { Container } from 'bootstrap-4-react';
import TopMenu from '../TopMenu';

export default class Admin extends React.Component {
    render() {
        return (
            <Container fluid>
                <TopMenu />
                <h1>Hruhru</h1>
            </Container>
        )
    }
}
