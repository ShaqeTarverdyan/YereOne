import React from 'react';
import { Input, Menu } from 'semantic-ui-react'

const SearchForm = () => {
    return (
        <Menu.Item  position='left' >
            <Input
                size='small'
                placeholder='Search entire store here...'
                icon='search'
            />

        </Menu.Item>

    );
}

export default SearchForm;