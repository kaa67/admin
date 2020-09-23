import * as React from 'react';
import { Container } from 'bootstrap-4-react';
import {inject, observer} from 'mobx-react';
import TopMenu from '../TopMenu';

@inject("UserStore")
@observer
class Admin extends React.Component {
    render() {
        return (
            <Container fluid>
                <TopMenu />
                <h1>
                    {this.props.UserStore.getEmail}
                </h1>
            </Container>
        )
    }
}

export default Admin;
