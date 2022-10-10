import React from 'react';
import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    navList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 0,
        padding: 0,
    },
    navListItem: {
        position: 'relative',
        paddingRight: '40px',
        '& a': {
            textDecoration: 'none',
            color: 'inherit',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '4px',
            height: '4px',
            right: '30px',
            top: '50%',
            borderRight: '1px solid #96151D',
            borderBottom: '1px solid #96151D',
            transform: 'rotate(45deg) translateY(-50%)',
        },
        '&:hover $navListItemMenu': {
            opacity: 1,
            transform: 'translateY(0px)',
        }
    },
    navListItemMenu: {
        opacity: 0,
        position: 'absolute',
        overflow: 'auto',
        listStyle: 'none',
        padding: '5px 15px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, .1)',
        left: 0,
        top: 'calc(100% + .25rem)',
        backgroundColor: 'white',
        minWidth: '100px',
        transform: 'translateY(-10px)',
        transition: 'opacity 150ms ease-in-out, transform 150ms ease-in-out',
        '& li': {
            margin: '10px 0',
        }
    },
    navBars: {
        opacity: 0,
        display: 'none',
        cursor: 'pointer',
    }
})

const Dropdown = ({ items: menuItems, children, onSelect }) => {
    const [items, setItems] = useState([]);
    const classes = useStyles()

    useEffect(() => {
        setItems(menuItems)
    }, [menuItems])

    const handleSelect = (item) => {
        onSelect(item)
    }

    return (

        <ul className={classes.navList}>
            <li className={classes.navListItem}>
                {children}
                <ul className={classes.navListItemMenu}>
                    {items.map(item => (<li key={item} onClick={handleSelect}>{item}</li>))}
                </ul>
            </li>
        </ul>
    );
};

export default Dropdown;