import * as React from 'react';
import { Container } from 'bootstrap-4-react';
import {inject, observer} from 'mobx-react';
import TopMenu from '../TopMenu';
import MainModal from '../../components/MainModal';

@inject("UserStore")
@observer
class Admin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <TopMenu />
                    <h1>
                        {this.props.UserStore.getEmail}
                    </h1>
                </Container>
                <MainModal />
            </React.Fragment>
        );
    }
}

export default Admin;
