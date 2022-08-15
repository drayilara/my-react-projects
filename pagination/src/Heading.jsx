import React from "react";
import { usePaginationContext } from "./Context";

const Heading = () => {
    const { data } = usePaginationContext();

    return (
        <div className="heading">
            <h1 className="heading-text">{data.loading ? "Loading..." : "Pagination"}</h1>
            <div className="heading-style"></div>
        </div>
    )
}

export default Heading;