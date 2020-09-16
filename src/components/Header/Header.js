import React from 'react';
import { Container, Grid, Image, Button } from 'semantic-ui-react';
import Logo from "../../assets/png/instaclone.png";
import './Header.scss';
import { Link, useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import useAuth from '../../hook/useAuth';


export const Header = () => {

    const client = useApolloClient();
    const { logout } = useAuth();
    const history = useHistory();

    const onLogout = () => {
        client.clearStore();
        logout();
        history.push('/');
        
    };
    return (
        <div className="header">
            <Container>
                <Grid>
                    <Grid.Column width={ 3 } className="header__logo">
                        <Link to="/">
                            <Image src={Logo} alt="instaclone" />
                        </Link>
                    </Grid.Column>
                    <Grid.Column width={ 10 } >
                        <p>Buscador</p>
                    </Grid.Column>
                    <Grid.Column width={ 3 } >
                        <Button size="small" onClick={ onLogout }>Logout</Button>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}

export default Header;