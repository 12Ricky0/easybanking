import React from "react";

function Image(props) {
    return <img style={props.style} data-testid={props.testid} onClick={props.onClick} ref={props.ref} src={props.src} className={props.className} alt="logo" />
}

export function Button(props) {
    return <button type="submit" className={props.className} onMouseOver={props.onMouseOver}>Request Invite</button>

}

export default Image;