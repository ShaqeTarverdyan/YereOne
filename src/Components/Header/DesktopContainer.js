import React from 'react';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import SearchForm from './SearchForm';
import ShopCard from './ShopCard';
import './headerStyle.css';
import {
    Menu,
    Container,
    Responsive,
    Visibility,
} from 'semantic-ui-react'

const getWidth = () => {
    const isSSR = typeof window === 'undefined';
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
}
class DesktopContainer extends React.Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props;
        const { fixed } = this.state
        return (
            <Responsive 
                getWidth={getWidth} 
                minWidth={Responsive.onlyTablet.minWidth}
            >
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Container
                        textAlign='center'
                        className='headerDiv'
                        padded='very'
                    >
                        <Menu
                            tabular='right'
                            secondary={!fixed}
                            // fixed={fixed ? 'top' : null}
                        >
                            <Container>
                                <Logo />
                                <HeaderMenu />
                                <SearchForm />
                                <ShopCard/>
                            </Container>
                        </Menu>
                    </Container>
                </Visibility>
                    { children }
            </Responsive>

        );
    }

}
export default DesktopContainer;