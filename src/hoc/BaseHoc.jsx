import React from "react";

const BaseHoc =
    (Component) =>
        ({ ...props }) => {
            return (
                <div>
                    <h1>This is Header</h1>
                    <Component {...props} />
                    <h1>This is Footer</h1>
                </div>
            )
        };

export default BaseHoc;