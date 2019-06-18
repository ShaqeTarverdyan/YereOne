import React from 'react';
import Logo from './Logo';
import SearchForm from './SearchForm';
import './headerStyle.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

import {
    Menu,
    Container,
    Responsive,
    Sidebar,
    Segment,
    Icon,
    Visibility,
    Input
} from 'semantic-ui-react'


const getWidth = () => {
    const isSSR = typeof window === 'undefined';
    return isSSR ? Responsive.onlyMobile.minWidth : window.innerWidth;
}

class MobileContainer extends React.Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    handleToggle = () => this.setState({ sidebarOpened: true })

    handleSearchFormHide = () => this.setState({ searchFormOpened: false })
    handleSearchFormToggle = () => this.setState({ searchFormOpened: true })


    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state
        const { searchFormOpened } = this.state

        return (
            <Responsive
                minWidth={Responsive.onlyMobile.minWidth}
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >

                <Sidebar
                    as={Menu}
                    animation='overlay'
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                    style={{ width: '40vw'}}
                >
                    <Menu.Item as={Link} to='/services'  style={sidebarMenuStyle}> Services </Menu.Item>
                    <Menu.Item as={Link} to='/portfolio' style={sidebarMenuStyle}> Portfolio </Menu.Item>
                    <Menu.Item as={Link} to='/about' style={sidebarMenuStyle}> About </Menu.Item>
                    <Menu.Item as={Link} to='/contacts' style={sidebarMenuStyle}> Contacts </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment
                        textAlign='center'
                        style={{ minHeight: 148, padding: '2em' }}
                        vertical
                    >
                        <Container>
                            <Menu secondary widths='2'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar'  color='grey' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Logo />
                                </Menu.Item>
                                <Menu.Item>
                                    <Icon name='search' onClick={this.handleSearchFormToggle} color='grey'/>
                                    <Icon name='shop' color='grey' />
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <Sidebar
                           as={Input}
                           animation='slide out'
                           onHide={this.handleSearchFormHide}
                           vertical='true'
                           visible={searchFormOpened}
                           width='wide'
                           direction='bottom'
                        >
                            <Input
                                placeholder='Search entire store here ...'
                                icon='search'
                                className='searchFormToggle' 
                            />
                        </Sidebar>
                    </Segment>
                    {children}
                </Sidebar.Pusher>

            </Responsive> 
        ); 
    }
}
const sidebarMenuStyle = {
    textAlign:'center',
    paddingBottom:'10px'

}
export default MobileContainer;