import Navbar from "../Navbar/Navbar";
import Head from 'next/head';
import Sidebar from "../Sidebar/Sidebar";
import {
    Button,
    Classes,
    Code,
    Divider,
    Drawer,
    H5,
    HTMLSelect,
    IOptionProps,
    Label,
    Position,
    Switch,
} from "@blueprintjs/core";
import { render } from "react-dom";


class Layout extends React.Component {


    state = {
        sidebar: {
            autoFocus: true,
            canEscapeKeyClose: true,
            canOutsideClickClose: true,
            enforceFocus: true,
            hasBackdrop: true,
            isOpen: true,
            position: Position.LEFT,
            size: Drawer.SIZE_SMALL,
            usePortal: true,
        }
    };



    handleClick = () => {
        this.setState(prevState => ({
            sidebar: {                   // object that we want to update
                ...prevState.sidebar,    // keep all other key-value pairs
                isOpen: !prevState.sidebar.isOpen       // update the value of specific key
            }
        }))
    };

    render() {
        return (
            <div>
                <Head>
                    <title>HEader</title>
                    <link href="https://unpkg.com/normalize.css@^7.0.0" rel="stylesheet" />
                    <link href="https://unpkg.com/@blueprintjs/icons@^3.4.0/lib/css/blueprint-icons.css" rel="stylesheet" />
                    <link href="https://unpkg.com/@blueprintjs/core@^3.10.0/lib/css/blueprint.css" rel="stylesheet" />
                </Head>
                <div className="container">
                    <Navbar handleClick={this.handleClick} />
                    <Sidebar handleClick={this.handleClick} sidebar={this.state.sidebar} />
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
    
            </div>
            
        )
    }
    
}

export default Layout;