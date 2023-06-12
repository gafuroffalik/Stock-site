import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, LOT_ROUTE, STOCK_ROUTE} from "../utils/consts";
import {observer} from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {

        user.setUser({})
        user.setIsAuth(false)
        user.setRole("")
        localStorage.clear()
        navigate(STOCK_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={STOCK_ROUTE}>СкладОнлайн</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto">
                        {
                            user.getRole && user.getRole === 'ADMIN' && (
                                <Button
                                    variant="outline-light"
                                    onClick={() => navigate(ADMIN_ROUTE)}
                                    className="ms-2"
                                >
                                    Админ панель
                                </Button>)
                        }
                        <Button
                            variant="outline-light"
                            onClick={() => navigate(LOT_ROUTE)}
                            className="ms-2"
                        >
                            Создать партию товара
                        </Button>
                        <Button
                            variant="outline-light"
                            onClick={() => logOut()}

                            className="ms-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto">
                        <Button variant="outline-light"
                                onClick={() => navigate(LOGIN_ROUTE)}
                        >Авторизация</Button>

                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;