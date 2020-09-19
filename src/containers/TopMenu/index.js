import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, Collapse } from 'bootstrap-4-react';

export default class TopMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    state;

    login(event) {
        event.stopPropagation();
        const user = {};
        this.setState({ user });
    }

    logout(event) {
        event.stopPropagation();
        const user = null;
        this.setState({ user });
    }

    render() {
        const { user } = this.state;
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
                                    <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
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