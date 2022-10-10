import React from 'react';
import {createUseStyles} from 'react-jss'

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
    }
  })

const Header = () => {
    const classes = useStyles()

    return (
        <header className={classes.header}>
            <div className={classes.headerContent}>
                {/* <Navbar /> */}
            </div>
        </header>
    );
};

export default Header;