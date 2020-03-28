import * as React from "react";
import Link from 'next/link';

import {
    Alignment,
    Button,
    Classes,
    H5,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
    Popover,
    Menu,
    MenuItem,
    MenuDivider,
    Position
} from "@blueprintjs/core";

const Header = (props) => {
    const exampleMenu = (
        <Menu>
            <MenuItem icon="graph" text="Graph" />
            <MenuItem icon="map" text="Map" />
            <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
            <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
            <MenuDivider />
            <MenuItem icon="cog" text="Settings...">
                <MenuItem icon="add" text="Add new application" disabled={true} />
                <MenuItem icon="remove" text="Remove application" />
            </MenuItem>
        </Menu>
    );

    return (
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Blueprint</NavbarHeading>
                <NavbarDivider />
                <Button onClick={props.handleClick}>Sidebar</Button>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
            <Link href="/about"><Button>About</Button></Link>
            <Popover content={exampleMenu} position={Position.BOTTOM}>
                <Button>Menu</Button>
            </Popover>

            </NavbarGroup>
        </Navbar>
    )
}

export default Header;
