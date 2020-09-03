import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import Logo from "../../assets/png/instaclone.png";
import './Header.scss';
import { Link } from 'react-router-dom';


export const Header = () => {
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
                        <p>Opciones</p>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}

export default Header;