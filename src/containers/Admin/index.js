import * as React from 'react';
import { Container } from 'bootstrap-4-react';
import TopMenu from '../TopMenu';
import './styles.css';

export default class Admin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TopMenu />
                <Container fluid>
                    Container
                </Container>
            </React.Fragment>
        )
    }
}
