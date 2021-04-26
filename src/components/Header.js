import React from 'react'
import { AppBar, Toolbar, makeStyles, Button, } from '@material-ui/core'
import logo from '/Users/somtee/Downloads/Code_LineUp_demo/src/images/header_logo_sm.png' 


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,

    },
    header: {
        backgroundColor: 'lightgrey',
        height: 100,
        position: 'relative'
    
    },
    title: { 
        fontWeight: '300',
        color: 'black',
        fontFamily: 'Work Sans, sans-serif',
        textAlign: 'center'

    },
    menuButton: {
        fontFamily:'Open Sans, sans-serif',
        fontWeight:'700',
        size:'18px',
        marginLeft: '38px'
        
    },
    toolbar: {
        display: 'flex',
        justifyContent:'space-between'
        
    },
    logostyle: {
        maxWidth: 160,
        marginRight: '10px'
        
    }

}))

export default function Header() {

    const { root, header, logostyle, menuButton, toolbar } = useStyles();
    return (
        <div>
        <header className={root}>
                <AppBar className={header}>
                    <Toolbar className={toolbar}>
                        <img src={logo} alt="Code LineUp" className={logostyle} />
                        <div>
                        <Button color='inherit' className={menuButton}>Home</Button>
                        <Button color="inherit" href="https://mosla.mathematik.uni-marburg.de/" className={menuButton}>About</Button>
                        <Button color="inherit" className={menuButton}>Login</Button>
                        </div>
                    </Toolbar>
                </AppBar>
        </header>
        </div>
    )
}

