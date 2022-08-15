import React from "react";
import { usePaginationContext } from "./Context";

const Page = ({ page }) => {
    const { loadPage } = usePaginationContext();

    return (
        <span
        onClick={(e) => loadPage(e)}
        >{page}</span>
    )
}

export default Page;