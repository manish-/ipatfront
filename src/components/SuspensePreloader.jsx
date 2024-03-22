import React from "react";

const SuspensePreloader = (props) => {


    return <div style={
        {
            position: "fixed",
            zIndex: 2000,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "#010101b8"
        }
    }>
        <div className="spinner-grow text-primary" role="status" style={{
            color: "#9ac51a", backgroundColor: "#9ac51a"
        }}>
            <span className="sr-only">Loading...</span>
        </div>
    </div>

}

export default SuspensePreloader;
