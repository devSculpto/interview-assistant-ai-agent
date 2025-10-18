
"use client"
import React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
function Provider({Children}) {
    return (

        <div>{Children} </div>
    )
}

export default Provider