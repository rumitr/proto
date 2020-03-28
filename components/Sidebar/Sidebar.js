
import * as React from "react";

import {
    Button,
    Classes,
    Code,
    Divider,
    Drawer,
    HTMLSelect,
    IOptionProps,
    Label,
    Position,
    Alignment, 
    AnchorButton, 
    ButtonGroup, 
    H5, Switch
} from "@blueprintjs/core";

class Sidebar extends React.Component {
    

    render() {
        return (
            <Drawer
                icon="info-sign"
                onClose={this.props.handleClick}
                title="Palantir Foundry"
                {...this.props.sidebar}
            >
                <div className={Classes.DRAWER_BODY}>
                <ButtonGroup large={true} vertical={true} alignText={'center'} >
                    <Button icon="database">Queries</Button>
                    <Button icon="function">Functions</Button>
                    <AnchorButton rightIcon="caret-down">Options</AnchorButton>
                </ButtonGroup>
                </div>
                <div className={Classes.DRAWER_FOOTER}>Footer</div>
            </Drawer>
        )
    }

}

export default Sidebar;
// export class DrawerExample extends React.PureComponent<IExampleProps<IBlueprintExampleData>, IDrawerExampleState> {
//     public state: IDrawerExampleState = {
//         autoFocus: true,
//         canEscapeKeyClose: true,
//         canOutsideClickClose: true,
//         enforceFocus: true,
//         hasBackdrop: true,
//         isOpen: false,
//         position: Position.RIGHT,
//         size: undefined,
//         usePortal: true,
//     };

//     private handleAutoFocusChange = handleBooleanChange(autoFocus => this.setState({ autoFocus }));
//     private handleBackdropChange = handleBooleanChange(hasBackdrop => this.setState({ hasBackdrop }));
//     private handleEnforceFocusChange = handleBooleanChange(enforceFocus => this.setState({ enforceFocus }));
//     private handleEscapeKeyChange = handleBooleanChange(canEscapeKeyClose => this.setState({ canEscapeKeyClose }));
//     private handleUsePortalChange = handleBooleanChange(usePortal => this.setState({ usePortal }));
//     private handlePositionChange = handleStringChange((position: Position) => this.setState({ position }));
//     private handleOutsideClickChange = handleBooleanChange(val => this.setState({ canOutsideClickClose: val }));
//     private handleSizeChange = handleStringChange(size => this.setState({ size }));

//     public render() {
//         return (
//             <Example options={this.renderOptions()} {...this.props}>
//                 <Button onClick={this.handleOpen}>Show Drawer</Button>
                
//             </Example>
//         );
//     }

//     private renderOptions() {
//         const { autoFocus, enforceFocus, canEscapeKeyClose, canOutsideClickClose, hasBackdrop, usePortal } = this.state;
//         return (
//             <>
//                 <H5>Props</H5>
//                 <Label>
//                     Position
//                     <HTMLSelect
//                         value={this.state.position}
//                         onChange={this.handlePositionChange}
//                         options={VALID_POSITIONS}
//                     />
//                 </Label>
//                 <Label>
//                     Size
//                     <HTMLSelect options={SIZES} onChange={this.handleSizeChange} />
//                 </Label>
//                 <Divider />
//                 <Switch checked={autoFocus} label="Auto focus" onChange={this.handleAutoFocusChange} />
//                 <Switch checked={enforceFocus} label="Enforce focus" onChange={this.handleEnforceFocusChange} />
//                 <Switch checked={hasBackdrop} label="Has backdrop" onChange={this.handleBackdropChange} />
//                 <Switch checked={usePortal} onChange={this.handleUsePortalChange}>
//                     Use <Code>Portal</Code>
//                 </Switch>
//                 <Switch
//                     checked={canOutsideClickClose}
//                     label="Click outside to close"
//                     onChange={this.handleOutsideClickChange}
//                 />
//                 <Switch checked={canEscapeKeyClose} label="Escape key to close" onChange={this.handleEscapeKeyChange} />
//             </>
//         );
//     }

//     private handleOpen = () => this.setState({ isOpen: true });
//     private handleClose = () => this.setState({ isOpen: false });
// }

// const SIZES: Array<string | IOptionProps> = [
//     { label: "Default", value: undefined },
//     { label: "Small", value: Drawer.SIZE_SMALL },
//     { label: "Standard", value: Drawer.SIZE_STANDARD },
//     { label: "Large", value: Drawer.SIZE_LARGE },
//     "72%",
//     "560px",
// ];
