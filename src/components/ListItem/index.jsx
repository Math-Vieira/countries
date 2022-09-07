import React from "react";

const ListItem = ({listItem, value}) => {
    return (
        <li>
            <b>{listItem}: </b> {value}
        </li>
    );
};

export default ListItem;
