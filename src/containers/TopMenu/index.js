import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, Collapse } from 'bootstrap-4-react';
import {inject, observer} from 'mobx-react';

@inject("UserStore")
@observer
@observer
class TopMenu extends Component {

    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    state;

    login(event) {
        event.stopPropagation();
        this.props.UserStore.user = {
            email: 'lkjlkj@kjhkjhkj>ruk',
        };
    }

    logout(event) {
        event.stopPropagation();
        this.props.UserStore.user = null;
    }

    render() {
        const { user } = this.props.UserStore;
        return (
            <Navbar expand="lg" dark bg="dark" mb="3">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Toggler target="#navbarColor2" />
                <Collapse navbar id="navbarColor2">
                    {
                        user === null
                        ? (
                            <Form my="1 lg-0">
                                <Button
                                        success
                                        outline
                                        sm
                                        my="2 sm-0"
                                        onClick={this.login}
                                    >
                                        Вход
                                </Button>
                            </Form>
                        )
                        : (
                            <React.Fragment>
                                <Navbar.Nav mr="auto">
                                    <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
                                    <Nav.ItemLink href="#">Features</Nav.ItemLink>
                                    <Nav.ItemLink href="#">Цены</Nav.ItemLink>
                                    <Nav.ItemLink href="#">About</Nav.ItemLink>
                                </Navbar.Nav>
                                <Navbar.Text>your_best@email.nah</Navbar.Text>
                                <Form inline my="3 lg-0">
                                    <Button
                                        danger
                                        outline
                                        sm
                                        my="1 sm-0"
                                        onClick={this.logout}
                                    >
                                        Выход
                                    </Button>
                                </Form>
                            </React.Fragment>
                        )
                    }
                </Collapse>
            </Navbar>
        )
    }
}

export default TopMenu;
