import React from "react";
import "./view.scss";
const MainView = (props) => (
<div>
    this is test page.
    <input onChange={props.setValue} value={props.value} />
    <div>
        value: {props.value}
    </div>
</div>
);
export default MainView;