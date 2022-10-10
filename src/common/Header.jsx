import React from 'react';
import { createUseStyles } from 'react-jss'
import Dropdown from './Dropdown';

const useStyles = createUseStyles({
    header: {
        padding: '0 25px',
        minHeight: '70px',
        display: 'flex',
        alignItems: 'flex-end',
    },
    headerContent: {
        flex: 1,
        borderBottom: '0.5px solid #9B9B9B',
        display: 'flex',
    },
    nav: {
        display: 'flex',
        padding: '30px 0 10px',
    },
})

const menu = [
    {
        key: 'Item 1',
        items: ['Sub Item 1']
    },
    {
        key: 'Item 2',
        items: ['Sub Item 1', 'Sub Item 2']
    },
    {
        key: 'Item 3',
        items: ['Sub Item 1', 'Sub Item 2', 'Sub Item 3']
    },
    {
        key: 'Item 4',
        items: ['Sub Item 1', 'Sub Item 2', 'Sub Item 3', 'Sub Item 4']
    }
]

const Header = () => {
    const classes = useStyles()

    return (
        <header className={classes.header}>
            <div className={classes.headerContent}>
                <nav className={classes.nav}>
                    {
                        menu.map(({ key, items }) => (
                            <Dropdown items={items} key={key}>
                                <a href="#">{key}</a>
                            </Dropdown>
                        ))
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;